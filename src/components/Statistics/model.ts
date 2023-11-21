import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface IStatisticsRequest
 */
export interface IStatisticsRequest {
    date: String,
    totalUser: Number,
    totalTransactions: Number,
    totalBillsPaid: Number,
}

/**
 * @export
 * @interface IStatisticsModel
 * @extends {Document}
 */
export interface IStatisticsModel extends Document {
    date: String,
    totalUser: Number,
    totalTransactions: Number,
    totalBillsPaid: Number,
}


/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -date
*        -totalUser
*        -totalTransactions
*        -totalBillsPaid

 *      properties:
*        date:
*          type: String
*        totalUser:
*          type: Number
*        totalTransactions:
*          type: Number
*        totalBillsPaid:
*          type: Number

 *    Statistics:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/StatisticsSchema'
 */
const StatisticsSchema: Schema = new Schema(
    {
        date: String,
        totalUser: Number,
        totalTransactions: Number,
        totalBillsPaid: Number,
    },
    {
        collection: 'statistics',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const statistics: any = this; // tslint:disable-line

    //do any customization of request on statistics here like encrypting password before saving
});




export default connections.db.model<IStatisticsModel>('StatisticsModel', StatisticsSchema);

