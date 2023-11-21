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
*        -companyName
*        -address
*        -phone
*        -email
*        -aboutUs

 *      properties:
*        companyName:
*          type: String
*        address:
*          type: String
*        phone:
*          type: String
*        email:
*          type: String
*        aboutUs:
*          type: String

 *    Companyinfo:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/CompanyinfoSchema'
 */
const CompanyinfoSchema = new mongoose_1.Schema({
    companyName: String,
    address: String,
    phone: String,
    email: String,
    aboutUs: String,
}, {
    collection: 'companyInfo',
    versionKey: false,
}).pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        //const companyInfo: any = this; // tslint:disable-line
        //do any customization of request on companyInfo here like encrypting password before saving
    });
});
exports.default = connections.db.model('CompanyinfoModel', CompanyinfoSchema);
//# sourceMappingURL=model.js.map