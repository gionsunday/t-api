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
*        -type
*        -status
*        -timestamp
*        -sender
*        -receiver
*        -amount
*        -currency
*        -discription
*        -exchangeRate
*        -fee

 *      properties:
*        type:
*          type: String
*        status:
*          type: String
*        timestamp:
*          type: String
*        sender:
*          type: String
*        receiver:
*          type: String
*        amount:
*          type: Number
*        currency:
*          type: String
*        discription:
*          type: String
*        exchangeRate:
*          type: Number
*        fee:
*          type: Number

 *    Transactions:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/TransactionsSchema'
 */
const TransactionsSchema = new mongoose_1.Schema({
    type: String,
    status: String,
    timestamp: String,
    sender: String,
    receiver: String,
    amount: Number,
    currency: String,
    discription: String,
    exchangeRate: Number,
    fee: Number,
}, {
    collection: 'transactions',
    versionKey: false,
}).pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        //const transactions: any = this; // tslint:disable-line
        //do any customization of request on transactions here like encrypting password before saving
    });
});
exports.default = connections.db.model('TransactionsModel', TransactionsSchema);
//# sourceMappingURL=model.js.map