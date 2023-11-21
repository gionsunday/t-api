"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class CompanyinfoValidation
 * @extends Validation
 */
class CompanyinfoValidation extends validation_1.default {
    /**
     * Creates an instance of CompanyinfoValidation.
     * @memberof CompanyinfoValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {ICompanyinfoModel} params
     * @returns {Joi.ValidationResult<ICompanyinfoModel >}
     * @memberof CompanyinfoValidation
     */
    createCompanyinfo(params) {
        const schema = Joi.object().keys({
            companyName: Joi.string(),
            address: Joi.string(),
            phone: Joi.string(),
            email: Joi.string(),
            aboutUs: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {ICompanyinfoModel} params
    * @returns {Joi.ValidationResult<ICompanyinfoModel >}
    * @memberof CompanyinfoValidation
    */
    updateCompanyinfo(params) {
        const schema = Joi.object().keys({
            companyName: Joi.string(),
            address: Joi.string(),
            phone: Joi.string(),
            email: Joi.string(),
            aboutUs: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof CompanyinfoValidation
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
     * @memberof CompanyinfoValidation
     */
    getCompanyinfo(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CompanyinfoValidation
     */
    removeCompanyinfo(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new CompanyinfoValidation();
//# sourceMappingURL=validation.js.map