"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class BillsValidation
 * @extends Validation
 */
class BillsValidation extends validation_1.default {
    /**
     * Creates an instance of BillsValidation.
     * @memberof BillsValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {IBillsModel} params
     * @returns {Joi.ValidationResult<IBillsModel >}
     * @memberof BillsValidation
     */
    createBills(params) {
        const schema = Joi.object().keys({
            name: Joi.string(),
            companyName: Joi.string(),
            user: Joi.string(),
            amount: Joi.number(),
            currency: Joi.string(),
            dueDate: Joi.string(),
            status: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {IBillsModel} params
    * @returns {Joi.ValidationResult<IBillsModel >}
    * @memberof BillsValidation
    */
    updateBills(params) {
        const schema = Joi.object().keys({
            name: Joi.string(),
            companyName: Joi.string(),
            user: Joi.string(),
            amount: Joi.number(),
            currency: Joi.string(),
            dueDate: Joi.string(),
            status: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof BillsValidation
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
     * @memberof BillsValidation
     */
    getBills(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof BillsValidation
     */
    removeBills(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new BillsValidation();
//# sourceMappingURL=validation.js.map