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
*        -bankName
*        -accountNumber
*        -routingNumber

 *      properties:
*        user:
*          type: String
*        bankName:
*          type: String
*        accountNumber:
*          type: String
*        routingNumber:
*          type: String

 *    Bankaccounts:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/BankaccountsSchema'
 */
const BankaccountsSchema = new mongoose_1.Schema({
    user: String,
    bankName: String,
    accountNumber: String,
    routingNumber: String,
}, {
    collection: 'bankAccounts',
    versionKey: false,
}).pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        //const bankAccounts: any = this; // tslint:disable-line
        //do any customization of request on bankAccounts here like encrypting password before saving
    });
});
exports.default = connections.db.model('BankaccountsModel', BankaccountsSchema);
//# sourceMappingURL=model.js.map