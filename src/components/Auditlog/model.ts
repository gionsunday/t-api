import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface IAuditlogRequest
 */
export interface IAuditlogRequest {
    user: String,
    action: String,
    targetUser: String,
    timestamp: String,
}

/**
 * @export
 * @interface IAuditlogModel
 * @extends {Document}
 */
export interface IAuditlogModel extends Document {
    user: String,
    action: String,
    targetUser: String,
    timestamp: String,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -user
*        -action
*        -targetUser
*        -timestamp

 *      properties:
*        user:
*          type: String
*        action:
*          type: String
*        targetUser:
*          type: String
*        timestamp:
*          type: String

 *    Auditlog:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/AuditlogSchema'
 */
const AuditlogSchema: Schema = new Schema(
    {
        user: String,
        action: String,
        targetUser: String,
        timestamp: String,
    },
    {
        collection: 'auditLog',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const auditLog: any = this; // tslint:disable-line

    //do any customization of request on auditLog here like encrypting password before saving
});




export default connections.db.model<IAuditlogModel>('AuditlogModel', AuditlogSchema);

