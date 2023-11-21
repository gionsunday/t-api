import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface IRecipientsRequest
 */
export interface IRecipientsRequest {
    user: String,
    firstName: String,
    lastName: String,
    country: String,
    phone: String,
    email: String,
}

/**
 * @export
 * @interface IRecipientsModel
 * @extends {Document}
 */
export interface IRecipientsModel extends Document {
    user: String,
    firstName: String,
    lastName: String,
    country: String,
    phone: String,
    email: String,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -user
*        -firstName
*        -lastName
*        -country
*        -phone
*        -email

 *      properties:
*        user:
*          type: String
*        firstName:
*          type: String
*        lastName:
*          type: String
*        country:
*          type: String
*        phone:
*          type: String
*        email:
*          type: String

 *    Recipients:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/RecipientsSchema'
 */
const RecipientsSchema: Schema = new Schema(
    {
        user: String,
        firstName: String,
        lastName: String,
        country: String,
        phone: String,
        email: String,
    },
    {
        collection: 'recipients',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const recipients: any = this; // tslint:disable-line

    //do any customization of request on recipients here like encrypting password before saving
});




export default connections.db.model<IRecipientsModel>('RecipientsModel', RecipientsSchema);

