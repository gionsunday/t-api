import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface IBankaccountsRequest
 */
export interface IBankaccountsRequest {
    user: String,
    bankName: String,
    accountNumber: String,
    routingNumber: String,
}

/**
 * @export
 * @interface IBankaccountsModel
 * @extends {Document}
 */
export interface IBankaccountsModel extends Document {
    user: String,
    bankName: String,
    accountNumber: String,
    routingNumber: String,
}



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
const BankaccountsSchema: Schema = new Schema(
    {
        user: String,
        bankName: String,
        accountNumber: String,
        routingNumber: String,
    },
    {
        collection: 'bankAccounts',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const bankAccounts: any = this; // tslint:disable-line

    //do any customization of request on bankAccounts here like encrypting password before saving
});




export default connections.db.model<IBankaccountsModel>('BankaccountsModel', BankaccountsSchema);

