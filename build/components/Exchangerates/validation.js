"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class ExchangeratesValidation
 * @extends Validation
 */
class ExchangeratesValidation extends validation_1.default {
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
    createExchangerates(params) {
        const schema = Joi.object().keys({
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
    updateExchangerates(params) {
        const schema = Joi.object().keys({
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
     * @memberof ExchangeratesValidation
     */
    getExchangerates(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ExchangeratesValidation
     */
    removeExchangerates(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new ExchangeratesValidation();
//# sourceMappingURL=validation.js.map