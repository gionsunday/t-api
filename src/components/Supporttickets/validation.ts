import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { ISupportticketsModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class SupportticketsValidation
 * @extends Validation
 */
class SupportticketsValidation extends Validation {
    /**
     * Creates an instance of SupportticketsValidation.
     * @memberof SupportticketsValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {ISupportticketsModel} params
     * @returns {Joi.ValidationResult<ISupportticketsModel >}
     * @memberof SupportticketsValidation
     */
    createSupporttickets(params: ISupportticketsModel): Joi.ValidationResult<ISupportticketsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            user: Joi.string(),
            subject: Joi.string(),
            description: Joi.string(),
            status: Joi.string(),
            timestamp: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {{ id: string }} body
    * @param {ISupportticketsModel} params
    * @returns {Joi.ValidationResult<ISupportticketsModel >}
    * @memberof SupportticketsValidation
    */
    updateSupporttickets(params: ISupportticketsModel): Joi.ValidationResult<ISupportticketsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            user: Joi.string(),
            subject: Joi.string(),
            description: Joi.string(),
            status: Joi.string(),
            timestamp: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof SupportticketsValidation
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
     * @memberof SupportticketsValidation
     */
    getSupporttickets(body: {
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
     * @memberof SupportticketsValidation
     */
    removeSupporttickets(body: {
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

export default new SupportticketsValidation();

