import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';
import * as bcrypt from "bcrypt"
//import { any } from '@hapi/joi';


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
    
    /*
    Hash user password befor saving.
    returns hashed password
     */
    const user: any  = this;
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
UsersSchema.statics.isEmailTaken = async function (email, excludeUserId) {
    const user: any = await this.findOne({ email, _id: { $ne: excludeUserId } });
    return !!user;
  };

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
    UsersSchema.methods.isPasswordMatch = async function (password) {
    const user: any = this;
    return await bcrypt.compare(password, user.password);
  };





export default connections.db.model<IUsersModel>('UsersModel', UsersSchema);

