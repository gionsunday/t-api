import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface IBillsRequest
 */
export interface IBillsRequest {
    name: String,
    companyName: String,
    user: String,
    amount: Number,
    currency: String,
    dueDate: String,
    status: String,
}

/**
 * @export
 * @interface IBillsModel
 * @extends {Document}
 */
export interface IBillsModel extends Document {
    name: String,
    companyName: String,
    user: String,
    amount: Number,
    currency: String,
    dueDate: String,
    status: String,
}



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
const BillsSchema: Schema = new Schema(
    {
        name: String,
        companyName: String,
        user: String,
        amount: Number,
        currency: String,
        dueDate: String,
        status: String,
    },
    {
        collection: 'bills',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const bills: any = this; // tslint:disable-line

    //do any customization of request on bills here like encrypting password before saving
});




export default connections.db.model<IBillsModel>('BillsModel', BillsSchema);

