import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';


export type Exchangerate = {

    USD: Number,
    EUR: Number,
    JPY: Number,
    BTC: Number,
};


/**
 * @export
 * @interface ICurrenciesRequest
 */
export interface ICurrenciesRequest {
    code: String,
    name: String,
    symbol: String,
    exchangeRate: Exchangerate,
}

/**
 * @export
 * @interface ICurrenciesModel
 * @extends {Document}
 */
export interface ICurrenciesModel extends Document {
    code: String,
    name: String,
    symbol: String,
    exchangeRate: Exchangerate,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -code
*        -name
*        -symbol

 *      properties:
*        code:
*          type: String
*        name:
*          type: String
*        symbol:
*          type: String

 *    Currencies:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/CurrenciesSchema'
 */
const CurrenciesSchema: Schema = new Schema(
    {
        code: String,
        name: String,
        symbol: String,
        exchangeRate: Object,
    },
    {
        collection: 'currencies',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const currencies: any = this; // tslint:disable-line

    //do any customization of request on currencies here like encrypting password before saving
});




export default connections.db.model<ICurrenciesModel>('CurrenciesModel', CurrenciesSchema);

