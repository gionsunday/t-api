"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class BankaccountsValidation
 * @extends Validation
 */
class BankaccountsValidation extends validation_1.default {
    /**
     * Creates an instance of BankaccountsValidation.
     * @memberof BankaccountsValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {IBankaccountsModel} params
     * @returns {Joi.ValidationResult<IBankaccountsModel >}
     * @memberof BankaccountsValidation
     */
    createBankaccounts(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            bankName: Joi.string(),
            accountNumber: Joi.string(),
            routingNumber: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {IBankaccountsModel} params
    * @returns {Joi.ValidationResult<IBankaccountsModel >}
    * @memberof BankaccountsValidation
    */
    updateBankaccounts(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            bankName: Joi.string(),
            accountNumber: Joi.string(),
            routingNumber: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof BankaccountsValidation
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
     * @memberof BankaccountsValidation
     */
    getBankaccounts(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof BankaccountsValidation
     */
    removeBankaccounts(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new BankaccountsValidation();
//# sourceMappingURL=validation.js.map