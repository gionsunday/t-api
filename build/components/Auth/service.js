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
const validation_1 = require("./validation");
const model_1 = require("../Users/model");
const model_2 = require("./model");
/**
 * @export
 * @implements {IAuthService}
 */
const AuthService = {
    /**
     * @param {ITokenRequest} body
     * @returns {Promise <any>}
     * @memberof AuthService
     */
    generateToken(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.validteTokenInput(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                //Fetch from collection based on email password
                const { password } = yield model_1.default.findOne({
                    email: body.email
                });
                const __pass = yield model_2.default(body.password, password);
                if (__pass) {
                    const user = yield model_1.default.findOne({
                        email: body.email,
                        password: body.password
                    });
                    return user;
                }
                throw new Error('Invalid password or email');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
    generateRegistrationToken(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.validteTokenInput(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                return;
                //Fetch from collection based on email password
                throw new Error('Invalid password or email');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
};
exports.default = AuthService;
//# sourceMappingURL=service.js.map