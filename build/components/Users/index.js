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
exports.remove = exports.update = exports.emailVerification = exports.create = exports.findOne = exports.search = exports.findAll = void 0;
const service_1 = require("./service");
const error_1 = require("@/config/error");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
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
            const users = yield service_1.default.findAll(pageNo, pageSize);
            const totalCount = yield service_1.default.countAll();
            res.status(200).json({ totalCount: totalCount, records: users, pageNo: pageNo + 1, pageSize: pageSize });
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
            const users = yield service_1.default.search(req.body, pageNo, pageSize);
            const totalCount = yield service_1.default.countSearch(req.body);
            res.status(201).json({ totalCount: totalCount, records: users, pageNo: pageNo, pageSize: pageSize });
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
            const users = yield service_1.default.findOne(req.params.id);
            res.status(200).json(users);
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
            const users = yield service_1.default.insert(req.body);
            res.status(201).json(users);
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
function emailVerification(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email } = req.body;
        try {
            const token = jwt.sign(req.body, process.env.SECRET, { expiresIn: "5min" });
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.MAILER_AUTH_EMAIL,
                    pass: process.env.MAILER_AUTH_PASS
                }
            });
            const mailOptions = {
                from: process.env.MAILER_AUTH_EMAIL,
                to: email,
                subject: ' Email Verification Code',
                html: `
            <body style="background-color:white; padding:5px; height:100%; width:100%>
            <div style="text-align:left; min-height:100vh; padding:20px">
         
         
             <h4>Email Verification Code</>
             <h2>Your account is almost ready</h2>
            <p>Kindly verify your email to complete your account registration</p> <br/>
      
              <a href="https://8484-gionsunday-tapi-mcxlppcckcf.ws-eu106.gitpod.io/userverification/token" st >Verify</a>
            <p>If this is not your doing,  you can safely ignore this message. Someone might have typed your email address by mistaken <br/> Thanks.</p>
            </div>
            </body>
            

            `
            };
            transporter.sendMail(mailOptions, function (error, body) {
                if (error) {
                    return error;
                }
                return ({ message: 'Email has be sent to you, kindly verify your email to complete registration', token: token });
            });
            res.status(200).json('Email Sent successfully');
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.emailVerification = emailVerification;
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
            const users = yield service_1.default.update(req.params.id, req.body);
            if (Number(users) > 0) {
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
            const users = yield service_1.default.remove(req.params.id);
            res.status(200).json(users);
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.remove = remove;
//# sourceMappingURL=index.js.map