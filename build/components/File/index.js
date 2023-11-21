"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = exports.upload = void 0;
const HttpStatus = require("http-status-codes");
const error_1 = require("@/config/error");
const fs = require('fs').promises;
const path_1 = require("path");
var mime = require('mime-types');
const UPLOADFOLDER = "upload";
const fileMoveAsync = (file) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const fileName = (new Date()).getTime().toString(36) + "_" + file.name.replace(/[^a-zA-Z0-9._]/g, '');
        const uploadPath = `${UPLOADFOLDER}\\${fileName}`;
        return file.mv(uploadPath, (err) => {
            if (err) {
                console.error(err);
                return reject({
                    success: false,
                    message: 'Something went wrong. Please upload again!',
                    data: file.name,
                });
            }
            return resolve({
                success: true,
                message: 'File Uploaded Successfully!',
                data: fileName,
            });
        });
    });
});
const uploadFunc = (file) => __awaiter(void 0, void 0, void 0, function* () {
    if (Array.isArray(file)) {
        try {
            const data = yield Promise.all(file.map((x) => fileMoveAsync(x)));
            return Promise.resolve({
                success: true,
                message: 'Files Uploaded Successfully!',
                data,
            });
        }
        catch (e) {
            return Promise.reject({
                success: false,
                message: 'Something went wrong. Please upload again!',
                data: null,
            });
        }
    }
    else if (typeof file === 'object') {
        return fileMoveAsync(file);
    }
});
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
function upload(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.files || Object.keys(req.files).length === 0) {
                throw new Error("No File Found");
            }
            const result = yield uploadFunc(req.files.files);
            res.status(HttpStatus.OK).json(result);
        }
        catch (error) {
            if (error.code === 500) {
                return next(new error_1.default(error.message.status, error.message));
            }
            return next(new error_1.default(error.message.status, error.message));
        }
    });
}
exports.upload = upload;
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
function read(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const filePath = `${UPLOADFOLDER}\\${req.params.name}`;
            const ext = path_1.extname(req.params.name);
            const base64 = yield fs.readFile(filePath, { encoding: 'base64' });
            if (base64 && mime.lookup(ext)) {
                const prefix = "data:" + mime.lookup(ext) + ";base64,";
                const dataUri = prefix + base64;
                res.status(200).json(dataUri);
            }
            else {
                throw new Error("No File Found");
            }
        }
        catch (error) {
            console.log(error);
            if (error.code === 500) {
                return next(new error_1.default(error.message.status, error.message));
            }
            return next(new error_1.default(error.message.status, error.message));
        }
    });
}
exports.read = read;
//# sourceMappingURL=index.js.map