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
exports.login = void 0;
const HttpStatus = require("http-status-codes");
const jwt = require("jsonwebtoken");
const error_1 = require("@/config/error");
const service_1 = require("./service");
const server_1 = require("@/config/server/server");
const index_1 = require("@/config/env/index");
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield service_1.default.generateToken(req.body);
            const token = jwt.sign({ user: user }, server_1.default.get('secret'), {
                expiresIn: index_1.default.TOKEN_EXPIRE_TIME_MSEC,
            });
            var tokenResponse = {
                accessToken: token,
                expiresIn: index_1.default.TOKEN_EXPIRE_TIME_MSEC,
                userData: user
            };
            res.status(HttpStatus.OK).json(tokenResponse);
        }
        catch (error) {
            if (error.code === 500) {
                return next(new error_1.default(error.message.status, error.message));
            }
            res.status(HttpStatus.BAD_REQUEST)
                .send({
                message: error.message,
            });
        }
    });
}
exports.login = login;
//# sourceMappingURL=index.js.map