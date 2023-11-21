"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class RecipientsValidation
 * @extends Validation
 */
class RecipientsValidation extends validation_1.default {
    /**
     * Creates an instance of RecipientsValidation.
     * @memberof RecipientsValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {IRecipientsModel} params
     * @returns {Joi.ValidationResult<IRecipientsModel >}
     * @memberof RecipientsValidation
     */
    createRecipients(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            country: Joi.string(),
            phone: Joi.string(),
            email: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {IRecipientsModel} params
    * @returns {Joi.ValidationResult<IRecipientsModel >}
    * @memberof RecipientsValidation
    */
    updateRecipients(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            country: Joi.string(),
            phone: Joi.string(),
            email: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof RecipientsValidation
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
     * @memberof RecipientsValidation
     */
    getRecipients(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof RecipientsValidation
     */
    removeRecipients(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new RecipientsValidation();
//# sourceMappingURL=validation.js.map