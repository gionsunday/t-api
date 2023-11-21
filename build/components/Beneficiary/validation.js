"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class BeneficiaryValidation
 * @extends Validation
 */
class BeneficiaryValidation extends validation_1.default {
    /**
     * Creates an instance of BeneficiaryValidation.
     * @memberof BeneficiaryValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {IBeneficiaryModel} params
     * @returns {Joi.ValidationResult<IBeneficiaryModel >}
     * @memberof BeneficiaryValidation
     */
    createBeneficiary(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            name: Joi.string(),
            accountNumber: Joi.string(),
            companyName: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {IBeneficiaryModel} params
    * @returns {Joi.ValidationResult<IBeneficiaryModel >}
    * @memberof BeneficiaryValidation
    */
    updateBeneficiary(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            name: Joi.string(),
            accountNumber: Joi.string(),
            companyName: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof BeneficiaryValidation
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
     * @memberof BeneficiaryValidation
     */
    getBeneficiary(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof BeneficiaryValidation
     */
    removeBeneficiary(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new BeneficiaryValidation();
//# sourceMappingURL=validation.js.map