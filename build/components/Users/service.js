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
const model_1 = require("./model");
const validation_1 = require("./validation");
const mongoose_1 = require("mongoose");
const SearchHelper_1 = require("@/utils/SearchHelper");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
/**
 * @export
 * @implements {IUsersModelService}
 */
const UsersService = {
    /**
    * @returns {Promise <number>}
    * @memberof UsersService
    */
    countAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.countDocuments({});
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @returns {Promise <number>}
     * @memberof ProductsService
     */
    countSearch(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = SearchHelper_1.GetSearchQuery(body);
                return yield model_1.default.countDocuments(query);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @returns {Promise < IUsersModel[] >}
     * @memberof UsersService
     */
    findAll(pageNo, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const skip = pageNo * pageSize;
                return yield model_1.default.find({}).skip(skip).limit(pageSize);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IUsersModel[]>}
    * @memberof UsersService
    */
    search(body, pageNo, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.searchParams(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const skip = pageNo * pageSize;
                const query = SearchHelper_1.GetSearchQuery(body);
                return yield model_1.default.find(query).skip(skip).limit(pageSize);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.getUsers({
                    id,
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                return yield model_1.default.findOne({
                    _id: mongoose_1.Types.ObjectId(id),
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
         * @param {IUsersModel} users
         * @returns {Promise < IUsersModel >}
         * @memberof UsersService
         */
    emailVerification(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = body;
            try {
                const validate = validation_1.default.createUsers(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const RegistrationToken = yield jwt.sign(body, process.env.SECRET, { expiresIn: "5min" });
                if (!RegistrationToken) {
                    throw new Error("Registration Failed. Please Try Again");
                }
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
                    return ({ message: 'Email has be sent to you, kindly verify your email to complete registration', token: RegistrationToken });
                });
                return RegistrationToken;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {IUsersModel} users
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
    insert(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = body;
            try {
                const validate = validation_1.default.createUsers(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const isEmailTaken = yield model_1.default.isEmailTaken(email);
                if (isEmailTaken) {
                    throw new Error("Account with Email exist. Login or use a diffrent Email");
                }
                const users = yield model_1.default.create(body);
                return users;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @param {IUsersModel} users
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.updateUsers(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const users = yield model_1.default.updateOne({ _id: mongoose_1.Types.ObjectId(id) }, { $set: body });
                return users.nModified;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.removeUsers({
                    id,
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const users = yield model_1.default.findOneAndRemove({
                    _id: mongoose_1.Types.ObjectId(id),
                });
                return users;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
};
exports.default = UsersService;
//# sourceMappingURL=service.js.map