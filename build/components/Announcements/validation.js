"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class AnnouncementsValidation
 * @extends Validation
 */
class AnnouncementsValidation extends validation_1.default {
    /**
     * Creates an instance of AnnouncementsValidation.
     * @memberof AnnouncementsValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {IAnnouncementsModel} params
     * @returns {Joi.ValidationResult<IAnnouncementsModel >}
     * @memberof AnnouncementsValidation
     */
    createAnnouncements(params) {
        const schema = Joi.object().keys({
            title: Joi.string(),
            content: Joi.string(),
            timestamp: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {IAnnouncementsModel} params
    * @returns {Joi.ValidationResult<IAnnouncementsModel >}
    * @memberof AnnouncementsValidation
    */
    updateAnnouncements(params) {
        const schema = Joi.object().keys({
            title: Joi.string(),
            content: Joi.string(),
            timestamp: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof AnnouncementsValidation
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
     * @memberof AnnouncementsValidation
     */
    getAnnouncements(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof AnnouncementsValidation
     */
    removeAnnouncements(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new AnnouncementsValidation();
//# sourceMappingURL=validation.js.map