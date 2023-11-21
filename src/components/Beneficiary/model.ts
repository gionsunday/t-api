import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface IBeneficiaryRequest
 */
export interface IBeneficiaryRequest {
    user: String,
    name: String,
    accountNumber: String,
    companyName: String,
}

/**
 * @export
 * @interface IBeneficiaryModel
 * @extends {Document}
 */
export interface IBeneficiaryModel extends Document {
    user: String,
    name: String,
    accountNumber: String,
    companyName: String,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -user
*        -name
*        -accountNumber
*        -companyName

 *      properties:
*        user:
*          type: String
*        name:
*          type: String
*        accountNumber:
*          type: String
*        companyName:
*          type: String

 *    Beneficiary:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/BeneficiarySchema'
 */
const BeneficiarySchema: Schema = new Schema(
    {
        user: String,
        name: String,
        accountNumber: String,
        companyName: String,
    },
    {
        collection: 'beneficiary',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const beneficiary: any = this; // tslint:disable-line

    //do any customization of request on beneficiary here like encrypting password before saving
});




export default connections.db.model<IBeneficiaryModel>('BeneficiaryModel', BeneficiarySchema);

