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
const connections = require("@/config/connection/connection");
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt");
/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -email
*        -password
*        -username

 *      properties:
*        email:
*          type: String
*        password:
*          type: String
*        username:
*          type: String

 *    Users:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/UsersSchema'
 */
const UsersSchema = new mongoose_1.Schema({
    email: String,
    password: String,
    profile: Object,
    username: String,
    wallet: Object,
}, {
    collection: 'users',
    versionKey: false,
}).pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        //const users: any = this; // tslint:disable-line
        //do any customization of request on users here like encrypting password before saving
        /*
        Hash user password befor saving.
        returns hashed password
         */
        const user = this;
        if (user.isModified('password')) {
            user.password = yield bcrypt.hash(user.password, 8);
        }
        next();
    });
});
/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
UsersSchema.statics.isEmailTaken = function (email, excludeUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield this.findOne({ email, _id: { $ne: excludeUserId } });
        return !!user;
    });
};
/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
UsersSchema.methods.isPasswordMatch = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        return yield bcrypt.compare(password, user.password);
    });
};
exports.default = connections.db.model('UsersModel', UsersSchema);
//# sourceMappingURL=model.js.map