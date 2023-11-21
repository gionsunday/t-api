"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class TransactionsValidation
 * @extends Validation
 */
class TransactionsValidation extends validation_1.default {
    /**
     * Creates an instance of TransactionsValidation.
     * @memberof TransactionsValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {ITransactionsModel} params
     * @returns {Joi.ValidationResult<ITransactionsModel >}
     * @memberof TransactionsValidation
     */
    createTransactions(params) {
        const schema = Joi.object().keys({
            type: Joi.string(),
            status: Joi.string(),
            timestamp: Joi.string(),
            sender: Joi.string(),
            receiver: Joi.string(),
            amount: Joi.number(),
            currency: Joi.string(),
            discription: Joi.string(),
            exchangeRate: Joi.number(),
            fee: Joi.number(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {ITransactionsModel} params
    * @returns {Joi.ValidationResult<ITransactionsModel >}
    * @memberof TransactionsValidation
    */
    updateTransactions(params) {
        const schema = Joi.object().keys({
            type: Joi.string(),
            status: Joi.string(),
            timestamp: Joi.string(),
            sender: Joi.string(),
            receiver: Joi.string(),
            amount: Joi.number(),
            currency: Joi.string(),
            discription: Joi.string(),
            exchangeRate: Joi.number(),
            fee: Joi.number(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof TransactionsValidation
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
     * @memberof TransactionsValidation
     */
    getTransactions(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof TransactionsValidation
     */
    removeTransactions(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new TransactionsValidation();
//# sourceMappingURL=validation.js.map