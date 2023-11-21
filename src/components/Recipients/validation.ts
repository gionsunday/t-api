import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IRecipientsModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class RecipientsValidation
 * @extends Validation
 */
class RecipientsValidation extends Validation {
    /**
     * Creates an instance of RecipientsValidation.
     * @memberof RecipientsValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IRecipientsModel} params
     * @returns {Joi.ValidationResult<IRecipientsModel >}
     * @memberof RecipientsValidation
     */
    createRecipients(params: IRecipientsModel): Joi.ValidationResult<IRecipientsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            user: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            country: Joi.string(),
            phone: Joi.string(),
            email: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {{ id: string }} body
    * @param {IRecipientsModel} params
    * @returns {Joi.ValidationResult<IRecipientsModel >}
    * @memberof RecipientsValidation
    */
    updateRecipients(params: IRecipientsModel): Joi.ValidationResult<IRecipientsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            user: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            country: Joi.string(),
            phone: Joi.string(),
            email: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof RecipientsValidation
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
     * @memberof RecipientsValidation
     */
    getRecipients(body: {
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
     * @memberof RecipientsValidation
     */
    removeRecipients(body: {
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

export default new RecipientsValidation();

