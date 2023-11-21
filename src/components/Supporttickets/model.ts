import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface ISupportticketsRequest
 */
export interface ISupportticketsRequest {
    user: String,
    subject: String,
    description: String,
    status: String,
    timestamp: String,
}

/**
 * @export
 * @interface ISupportticketsModel
 * @extends {Document}
 */
export interface ISupportticketsModel extends Document {
    user: String,
    subject: String,
    description: String,
    status: String,
    timestamp: String,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -user
*        -subject
*        -description
*        -status
*        -timestamp

 *      properties:
*        user:
*          type: String
*        subject:
*          type: String
*        description:
*          type: String
*        status:
*          type: String
*        timestamp:
*          type: String

 *    Supporttickets:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/SupportticketsSchema'
 */
const SupportticketsSchema: Schema = new Schema(
    {
        user: String,
        subject: String,
        description: String,
        status: String,
        timestamp: String,
    },
    {
        collection: 'supportTickets',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const supportTickets: any = this; // tslint:disable-line

    //do any customization of request on supportTickets here like encrypting password before saving
});




export default connections.db.model<ISupportticketsModel>('SupportticketsModel', SupportticketsSchema);

