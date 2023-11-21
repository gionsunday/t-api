"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class SupportticketsValidation
 * @extends Validation
 */
class SupportticketsValidation extends validation_1.default {
    /**
     * Creates an instance of SupportticketsValidation.
     * @memberof SupportticketsValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {ISupportticketsModel} params
     * @returns {Joi.ValidationResult<ISupportticketsModel >}
     * @memberof SupportticketsValidation
     */
    createSupporttickets(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            subject: Joi.string(),
            description: Joi.string(),
            status: Joi.string(),
            timestamp: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {ISupportticketsModel} params
    * @returns {Joi.ValidationResult<ISupportticketsModel >}
    * @memberof SupportticketsValidation
    */
    updateSupporttickets(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            subject: Joi.string(),
            description: Joi.string(),
            status: Joi.string(),
            timestamp: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof SupportticketsValidation
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
     * @memberof SupportticketsValidation
     */
    getSupporttickets(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof SupportticketsValidation
     */
    removeSupporttickets(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new SupportticketsValidation();
//# sourceMappingURL=validation.js.map