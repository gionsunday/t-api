import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';


export type Profile = {

    firstName: String,
    lastName: String,
    country: String,
    currency: String,
    phone: String,
};
export type Transactions = {};
export type Wallet = {

    balance: Number,
    currency: String,
    transactions: Transactions[],
};


/**
 * @export
 * @interface IUsersRequest
 */
export interface IUsersRequest {
    email: String,
    password: String,
    profile: Profile,
    username: String,
    wallet: Wallet,
}

/**
 * @export
 * @interface IUsersModel
 * @extends {Document}
 */
export interface IUsersModel extends Document {
    email: String,
    password: String,
    profile: Profile,
    username: String,
    wallet: Wallet,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -email
*        -password
*        -username

 *      properties:
*        email:
*          type: String
*        password:
*          type: String
*        username:
*          type: String

 *    Users:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/UsersSchema'
 */
const UsersSchema: Schema = new Schema(
    {
        email: String,
        password: String,
        profile: Object,
        username: String,
        wallet: Object,
    },
    {
        collection: 'users',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const users: any = this; // tslint:disable-line

    //do any customization of request on users here like encrypting password before saving
});




export default connections.db.model<IUsersModel>('UsersModel', UsersSchema);

