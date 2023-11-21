import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IExchangeratesModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class ExchangeratesValidation
 * @extends Validation
 */
class ExchangeratesValidation extends Validation {
    /**
     * Creates an instance of ExchangeratesValidation.
     * @memberof ExchangeratesValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IExchangeratesModel} params
     * @returns {Joi.ValidationResult<IExchangeratesModel >}
     * @memberof ExchangeratesValidation
     */
    createExchangerates(params: IExchangeratesModel): Joi.ValidationResult<IExchangeratesModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            baseCurrency: Joi.string(),
            targetCurrency: Joi.string(),
            rate: Joi.number(),
            lastUpdated: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {{ id: string }} body
    * @param {IExchangeratesModel} params
    * @returns {Joi.ValidationResult<IExchangeratesModel >}
    * @memberof ExchangeratesValidation
    */
    updateExchangerates(params: IExchangeratesModel): Joi.ValidationResult<IExchangeratesModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            baseCurrency: Joi.string(),
            targetCurrency: Joi.string(),
            rate: Joi.number(),
            lastUpdated: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof ExchangeratesValidation
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
     * @memberof ExchangeratesValidation
     */
    getExchangerates(body: {
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
     * @memberof ExchangeratesValidation
     */
    removeExchangerates(body: {
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

export default new ExchangeratesValidation();

