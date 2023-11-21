import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface IExchangeratesRequest
 */
export interface IExchangeratesRequest {
    baseCurrency: String,
    targetCurrency: String,
    rate: Number,
    lastUpdated: String,
}

/**
 * @export
 * @interface IExchangeratesModel
 * @extends {Document}
 */
export interface IExchangeratesModel extends Document {
    baseCurrency: String,
    targetCurrency: String,
    rate: Number,
    lastUpdated: String,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -baseCurrency
*        -targetCurrency
*        -rate
*        -lastUpdated

 *      properties:
*        baseCurrency:
*          type: String
*        targetCurrency:
*          type: String
*        rate:
*          type: Number
*        lastUpdated:
*          type: String

 *    Exchangerates:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/ExchangeratesSchema'
 */
const ExchangeratesSchema: Schema = new Schema(
    {
        baseCurrency: String,
        targetCurrency: String,
        rate: Number,
        lastUpdated: String,
    },
    {
        collection: 'exchangeRates',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const exchangeRates: any = this; // tslint:disable-line

    //do any customization of request on exchangeRates here like encrypting password before saving
});




export default connections.db.model<IExchangeratesModel>('ExchangeratesModel', ExchangeratesSchema);

