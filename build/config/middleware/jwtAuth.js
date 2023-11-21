"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const HttpStatus = require("http-status-codes");
const jwt = require("jsonwebtoken");
const server_1 = require("@/config/server/server");
const error_1 = require("@/config/error");
const http = require("http");
/**
 *
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {void}
 * @swagger
 *  components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
function isAuthenticated(req, res, next) {
    const token = req.headers.authorization;
    if (token && token.indexOf('Bearer ') !== -1) {
        try {
            const user = jwt.verify(token.split('Bearer ')[1], server_1.default.get('secret'));
            if (user) {
                req.user = user;
                return next();
            }
            next(new error_1.default(HttpStatus.BAD_REQUEST, 'Invalid token provided'));
        }
        catch (error) {
            return next(new error_1.default(HttpStatus.UNAUTHORIZED, http.STATUS_CODES[HttpStatus.UNAUTHORIZED]));
        }
    }
    return next(new error_1.default(HttpStatus.BAD_REQUEST, 'No token provided'));
}
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=jwtAuth.js.map