import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface ITransactionsRequest
 */
export interface ITransactionsRequest {
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
}

/**
 * @export
 * @interface ITransactionsModel
 * @extends {Document}
 */
export interface ITransactionsModel extends Document {
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
}



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
const TransactionsSchema: Schema = new Schema(
    {
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
    },
    {
        collection: 'transactions',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const transactions: any = this; // tslint:disable-line

    //do any customization of request on transactions here like encrypting password before saving
});




export default connections.db.model<ITransactionsModel>('TransactionsModel', TransactionsSchema);

