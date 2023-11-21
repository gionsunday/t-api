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
/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -user
*        -firstName
*        -lastName
*        -country
*        -phone
*        -email

 *      properties:
*        user:
*          type: String
*        firstName:
*          type: String
*        lastName:
*          type: String
*        country:
*          type: String
*        phone:
*          type: String
*        email:
*          type: String

 *    Recipients:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/RecipientsSchema'
 */
const RecipientsSchema = new mongoose_1.Schema({
    user: String,
    firstName: String,
    lastName: String,
    country: String,
    phone: String,
    email: String,
}, {
    collection: 'recipients',
    versionKey: false,
}).pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        //const recipients: any = this; // tslint:disable-line
        //do any customization of request on recipients here like encrypting password before saving
    });
});
exports.default = connections.db.model('RecipientsModel', RecipientsSchema);
//# sourceMappingURL=model.js.map