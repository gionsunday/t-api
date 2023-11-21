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
exports.remove = exports.update = exports.create = exports.findOne = exports.search = exports.findAll = void 0;
const service_1 = require("./service");
const error_1 = require("@/config/error");
/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
function findAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pageNo = req.query.pageNo ? parseInt(req.query.pageNo.toString()) - 1 : 0;
            const pageSize = req.query.pageSize ? parseInt(req.query.pageSize.toString()) : 20;
            const bankAccounts = yield service_1.default.findAll(pageNo, pageSize);
            const totalCount = yield service_1.default.countAll();
            res.status(200).json({ totalCount: totalCount, records: bankAccounts, pageNo: pageNo + 1, pageSize: pageSize });
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.findAll = findAll;
/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
function search(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pageNo = req.query.pageNo ? parseInt(req.query.pageNo.toString()) - 1 : 0;
            const pageSize = req.query.pageSize ? parseInt(req.query.pageSize.toString()) : 20;
            const bankAccounts = yield service_1.default.search(req.body, pageNo, pageSize);
            const totalCount = yield service_1.default.countSearch(req.body);
            res.status(201).json({ totalCount: totalCount, records: bankAccounts, pageNo: pageNo, pageSize: pageSize });
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.search = search;
/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
function findOne(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bankAccounts = yield service_1.default.findOne(req.params.id);
            res.status(200).json(bankAccounts);
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.findOne = findOne;
/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bankAccounts = yield service_1.default.insert(req.body);
            res.status(201).json(bankAccounts);
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.create = create;
/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
function update(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bankAccounts = yield service_1.default.update(req.params.id, req.body);
            if (bankAccounts > 0) {
                res.status(200).json('Updated successfully');
            }
            else {
                res.status(400).json('Failed to update');
            }
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.update = update;
/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
function remove(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bankAccounts = yield service_1.default.remove(req.params.id);
            res.status(200).json(bankAccounts);
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.remove = remove;
//# sourceMappingURL=index.js.map