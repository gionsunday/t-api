import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { ICurrenciesModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class CurrenciesValidation
 * @extends Validation
 */
class CurrenciesValidation extends Validation {
    /**
     * Creates an instance of CurrenciesValidation.
     * @memberof CurrenciesValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {ICurrenciesModel} params
     * @returns {Joi.ValidationResult<ICurrenciesModel >}
     * @memberof CurrenciesValidation
     */
    createCurrencies(params: ICurrenciesModel): Joi.ValidationResult<ICurrenciesModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            code: Joi.string(),
            name: Joi.string(),
            symbol: Joi.string(),
            exchangeRate: Joi.object(),

        });

        return schema.validate(params);
    }

    /**
    * @param {{ id: string }} body
    * @param {ICurrenciesModel} params
    * @returns {Joi.ValidationResult<ICurrenciesModel >}
    * @memberof CurrenciesValidation
    */
    updateCurrencies(params: ICurrenciesModel): Joi.ValidationResult<ICurrenciesModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            code: Joi.string(),
            name: Joi.string(),
            symbol: Joi.string(),
            exchangeRate: Joi.object(),

        });

        return schema.validate(params);
    }

    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof CurrenciesValidation
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
     * @memberof CurrenciesValidation
     */
    getCurrencies(body: {
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
     * @memberof CurrenciesValidation
     */
    removeCurrencies(body: {
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

export default new CurrenciesValidation();

