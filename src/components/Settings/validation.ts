import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { ISettingsModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class SettingsValidation
 * @extends Validation
 */
class SettingsValidation extends Validation {
    /**
     * Creates an instance of SettingsValidation.
     * @memberof SettingsValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {ISettingsModel} params
     * @returns {Joi.ValidationResult<ISettingsModel >}
     * @memberof SettingsValidation
     */
    createSettings(params: ISettingsModel): Joi.ValidationResult<ISettingsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            transferFee: Joi.number(),
            minTranferAmount: Joi.number(),
            maxTransferAmount: Joi.number(),

        });

        return schema.validate(params);
    }

    /**
    * @param {{ id: string }} body
    * @param {ISettingsModel} params
    * @returns {Joi.ValidationResult<ISettingsModel >}
    * @memberof SettingsValidation
    */
    updateSettings(params: ISettingsModel): Joi.ValidationResult<ISettingsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            transferFee: Joi.number(),
            minTranferAmount: Joi.number(),
            maxTransferAmount: Joi.number(),

        });

        return schema.validate(params);
    }

    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof SettingsValidation
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
     * @memberof SettingsValidation
     */
    getSettings(body: {
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
     * @memberof SettingsValidation
     */
    removeSettings(body: {
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

export default new SettingsValidation();

