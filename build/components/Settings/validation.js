"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class SettingsValidation
 * @extends Validation
 */
class SettingsValidation extends validation_1.default {
    /**
     * Creates an instance of SettingsValidation.
     * @memberof SettingsValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {ISettingsModel} params
     * @returns {Joi.ValidationResult<ISettingsModel >}
     * @memberof SettingsValidation
     */
    createSettings(params) {
        const schema = Joi.object().keys({
            transferFee: Joi.number(),
            minTranferAmount: Joi.number(),
            maxTransferAmount: Joi.number(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {ISettingsModel} params
    * @returns {Joi.ValidationResult<ISettingsModel >}
    * @memberof SettingsValidation
    */
    updateSettings(params) {
        const schema = Joi.object().keys({
            transferFee: Joi.number(),
            minTranferAmount: Joi.number(),
            maxTransferAmount: Joi.number(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof SettingsValidation
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
     * @memberof SettingsValidation
     */
    getSettings(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof SettingsValidation
     */
    removeSettings(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new SettingsValidation();
//# sourceMappingURL=validation.js.map