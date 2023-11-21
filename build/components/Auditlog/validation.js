"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class AuditlogValidation
 * @extends Validation
 */
class AuditlogValidation extends validation_1.default {
    /**
     * Creates an instance of AuditlogValidation.
     * @memberof AuditlogValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {IAuditlogModel} params
     * @returns {Joi.ValidationResult<IAuditlogModel >}
     * @memberof AuditlogValidation
     */
    createAuditlog(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            action: Joi.string(),
            targetUser: Joi.string(),
            timestamp: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {IAuditlogModel} params
    * @returns {Joi.ValidationResult<IAuditlogModel >}
    * @memberof AuditlogValidation
    */
    updateAuditlog(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            action: Joi.string(),
            targetUser: Joi.string(),
            timestamp: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof AuditlogValidation
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
     * @memberof AuditlogValidation
     */
    getAuditlog(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof AuditlogValidation
     */
    removeAuditlog(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new AuditlogValidation();
//# sourceMappingURL=validation.js.map