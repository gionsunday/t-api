import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface ISettingsRequest
 */
export interface ISettingsRequest {
    transferFee: Number,
    minTranferAmount: Number,
    maxTransferAmount: Number,
}

/**
 * @export
 * @interface ISettingsModel
 * @extends {Document}
 */
export interface ISettingsModel extends Document {
    transferFee: Number,
    minTranferAmount: Number,
    maxTransferAmount: Number,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -transferFee
*        -minTranferAmount
*        -maxTransferAmount

 *      properties:
*        transferFee:
*          type: Number
*        minTranferAmount:
*          type: Number
*        maxTransferAmount:
*          type: Number

 *    Settings:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/SettingsSchema'
 */
const SettingsSchema: Schema = new Schema(
    {
        transferFee: Number,
        minTranferAmount: Number,
        maxTransferAmount: Number,
    },
    {
        collection: 'settings',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const settings: any = this; // tslint:disable-line

    //do any customization of request on settings here like encrypting password before saving
});




export default connections.db.model<ISettingsModel>('SettingsModel', SettingsSchema);

