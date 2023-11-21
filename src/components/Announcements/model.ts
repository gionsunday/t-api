import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface IAnnouncementsRequest
 */
export interface IAnnouncementsRequest {
    title: String,
    content: String,
    timestamp: String,
}

/**
 * @export
 * @interface IAnnouncementsModel
 * @extends {Document}
 */
export interface IAnnouncementsModel extends Document {
    title: String,
    content: String,
    timestamp: String,
}

/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -title
*        -content
*        -timestamp

 *      properties:
*        title:
*          type: String
*        content:
*          type: String
*        timestamp:
*          type: String

 *    Announcements:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/AnnouncementsSchema'
 */
const AnnouncementsSchema: Schema = new Schema(
    {
        title: String,
        content: String,
        timestamp: String,
    },
    {
        collection: 'announcements',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const announcements: any = this; // tslint:disable-line

    //do any customization of request on announcements here like encrypting password before saving
});

export default connections.db.model<IAnnouncementsModel>('AnnouncementsModel', AnnouncementsSchema);

