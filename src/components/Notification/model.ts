import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface INotificationRequest
 */
export interface INotificationRequest {
    user: String,
    type: String,
    content: String,
    timestamp: String,
    isRead: Boolean,
}

/**
 * @export
 * @interface INotificationModel
 * @extends {Document}
 */
export interface INotificationModel extends Document {
    user: String,
    type: String,
    content: String,
    timestamp: String,
    isRead: Boolean,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -user
*        -type
*        -content
*        -timestamp
*        -isRead

 *      properties:
*        user:
*          type: String
*        type:
*          type: String
*        content:
*          type: String
*        timestamp:
*          type: String
*        isRead:
*          type: Boolean

 *    Notification:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/NotificationSchema'
 */
const NotificationSchema: Schema = new Schema(
    {
        user: String,
        type: String,
        content: String,
        timestamp: String,
        isRead: Boolean,
    },
    {
        collection: 'notification',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const notification: any = this; // tslint:disable-line

    //do any customization of request on notification here like encrypting password before saving
});




export default connections.db.model<INotificationModel>('NotificationModel', NotificationSchema);

