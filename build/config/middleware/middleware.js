"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initErrorHandler = exports.configure = void 0;
const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const error_1 = require("@/config/error");
const sendHttpError_1 = require("@/config/error/sendHttpError");
const Logger_1 = require("@/utils/Logger");
/**
 * @export
 * @param {express.Application} app
 */
function configure(app) {
    // express middleware
    app.use(bodyParser.urlencoded({
        extended: false,
    }));
    app.use(bodyParser.json());
    // parse Cookie header and populate req.cookies with an object keyed by the cookie names.
    app.use(cookieParser());
    // returns the compression middleware
    app.use(compression());
    // helps you secure your Express apps by setting various HTTP headers
    app.use(helmet());
    // providing a Connect/Express middleware that can be used to enable CORS with various options
    app.use(cors({
        exposedHeaders: ['Authorization'],
        optionsSuccessStatus: HttpStatus.OK,
    }));
    // custom errors
    app.use(sendHttpError_1.sendHttpErrorModule);
}
exports.configure = configure;
/**
 * @export
 * @param {express.Application} app
 */
function initErrorHandler(app) {
    app.use((error, req, res, next) => {
        if (typeof error === 'number') {
            error = new error_1.HttpError(error); // next(404)
        }
        if (error instanceof error_1.HttpError) {
            res.sendHttpError(error);
        }
        else {
            if (app.get('env') === 'development') {
                error = new error_1.HttpError(HttpStatus.INTERNAL_SERVER_ERROR, error.message);
                res.sendHttpError(error);
            }
            else {
                error = new error_1.HttpError(HttpStatus.INTERNAL_SERVER_ERROR);
                res.sendHttpError(error, error.message);
            }
        }
        Logger_1.default.error(error);
    });
}
exports.initErrorHandler = initErrorHandler;
//# sourceMappingURL=middleware.js.map