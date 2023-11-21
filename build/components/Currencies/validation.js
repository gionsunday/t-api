"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class CurrenciesValidation
 * @extends Validation
 */
class CurrenciesValidation extends validation_1.default {
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
    createCurrencies(params) {
        const schema = Joi.object().keys({
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
    updateCurrencies(params) {
        const schema = Joi.object().keys({
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
    searchParams(params) {
        const schema = Joi.object().keys({
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
    getCurrencies(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CurrenciesValidation
     */
    removeCurrencies(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new CurrenciesValidation();
//# sourceMappingURL=validation.js.map