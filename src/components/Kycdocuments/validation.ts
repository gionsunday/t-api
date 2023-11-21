import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IKycdocumentsModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class KycdocumentsValidation
 * @extends Validation
 */
class KycdocumentsValidation extends Validation {
    /**
     * Creates an instance of KycdocumentsValidation.
     * @memberof KycdocumentsValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IKycdocumentsModel} params
     * @returns {Joi.ValidationResult<IKycdocumentsModel >}
     * @memberof KycdocumentsValidation
     */
    createKycdocuments(params: IKycdocumentsModel): Joi.ValidationResult<IKycdocumentsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            user: Joi.string(),
            documentType: Joi.string(),
            documentNumber: Joi.string(),
            issueDate: Joi.string(),
            expiryDate: Joi.string(),
            imageURL: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {{ id: string }} body
    * @param {IKycdocumentsModel} params
    * @returns {Joi.ValidationResult<IKycdocumentsModel >}
    * @memberof KycdocumentsValidation
    */
    updateKycdocuments(params: IKycdocumentsModel): Joi.ValidationResult<IKycdocumentsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            user: Joi.string(),
            documentType: Joi.string(),
            documentNumber: Joi.string(),
            issueDate: Joi.string(),
            expiryDate: Joi.string(),
            imageURL: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof KycdocumentsValidation
    */
    searchParams(params: ISearchParamRequest): Joi.ValidationResult<ISearchParamRequest> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            orAnd: Joi.string().required(),
            params: Joi.array().required()

        });

        return schema.validate(params);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof KycdocumentsValidation
     */
    getKycdocuments(body: {
        id: string;
    }): Joi.ValidationResult<{
        id: string;
    }> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof KycdocumentsValidation
     */
    removeKycdocuments(body: {
        id: string;
    }): Joi.ValidationResult<{
        id: string;
    }> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }
}

export default new KycdocumentsValidation();

