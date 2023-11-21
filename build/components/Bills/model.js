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
*        -name
*        -companyName
*        -user
*        -amount
*        -currency
*        -dueDate
*        -status

 *      properties:
*        name:
*          type: String
*        companyName:
*          type: String
*        user:
*          type: String
*        amount:
*          type: Number
*        currency:
*          type: String
*        dueDate:
*          type: String
*        status:
*          type: String

 *    Bills:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/BillsSchema'
 */
const BillsSchema = new mongoose_1.Schema({
    name: String,
    companyName: String,
    user: String,
    amount: Number,
    currency: String,
    dueDate: String,
    status: String,
}, {
    collection: 'bills',
    versionKey: false,
}).pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        //const bills: any = this; // tslint:disable-line
        //do any customization of request on bills here like encrypting password before saving
    });
});
exports.default = connections.db.model('BillsModel', BillsSchema);
//# sourceMappingURL=model.js.map