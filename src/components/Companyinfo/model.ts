import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface ICompanyinfoRequest
 */
export interface ICompanyinfoRequest {
    companyName: String,
    address: String,
    phone: String,
    email: String,
    aboutUs: String,
}

/**
 * @export
 * @interface ICompanyinfoModel
 * @extends {Document}
 */
export interface ICompanyinfoModel extends Document {
    companyName: String,
    address: String,
    phone: String,
    email: String,
    aboutUs: String,
}



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
const CompanyinfoSchema: Schema = new Schema(
    {
        companyName: String,
        address: String,
        phone: String,
        email: String,
        aboutUs: String,
    },
    {
        collection: 'companyInfo',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const companyInfo: any = this; // tslint:disable-line

    //do any customization of request on companyInfo here like encrypting password before saving
});




export default connections.db.model<ICompanyinfoModel>('CompanyinfoModel', CompanyinfoSchema);

