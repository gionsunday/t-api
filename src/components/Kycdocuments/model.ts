import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface IKycdocumentsRequest
 */
export interface IKycdocumentsRequest {
    user: String,
    documentType: String,
    documentNumber: String,
    issueDate: String,
    expiryDate: String,
    imageURL: String,
}

/**
 * @export
 * @interface IKycdocumentsModel
 * @extends {Document}
 */
export interface IKycdocumentsModel extends Document {
    user: String,
    documentType: String,
    documentNumber: String,
    issueDate: String,
    expiryDate: String,
    imageURL: String,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -user
*        -documentType
*        -documentNumber
*        -issueDate
*        -expiryDate
*        -imageURL

 *      properties:
*        user:
*          type: String
*        documentType:
*          type: String
*        documentNumber:
*          type: String
*        issueDate:
*          type: String
*        expiryDate:
*          type: String
*        imageURL:
*          type: String

 *    Kycdocuments:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/KycdocumentsSchema'
 */
const KycdocumentsSchema: Schema = new Schema(
    {
        user: String,
        documentType: String,
        documentNumber: String,
        issueDate: String,
        expiryDate: String,
        imageURL: String,
    },
    {
        collection: 'kycDocuments',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const kycDocuments: any = this; // tslint:disable-line

    //do any customization of request on kycDocuments here like encrypting password before saving
});




export default connections.db.model<IKycdocumentsModel>('KycdocumentsModel', KycdocumentsSchema);

