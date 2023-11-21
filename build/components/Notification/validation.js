"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class NotificationValidation
 * @extends Validation
 */
class NotificationValidation extends validation_1.default {
    /**
     * Creates an instance of NotificationValidation.
     * @memberof NotificationValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {INotificationModel} params
     * @returns {Joi.ValidationResult<INotificationModel >}
     * @memberof NotificationValidation
     */
    createNotification(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            type: Joi.string(),
            content: Joi.string(),
            timestamp: Joi.string(),
            isRead: Joi.boolean(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {INotificationModel} params
    * @returns {Joi.ValidationResult<INotificationModel >}
    * @memberof NotificationValidation
    */
    updateNotification(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            type: Joi.string(),
            content: Joi.string(),
            timestamp: Joi.string(),
            isRead: Joi.boolean(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof NotificationValidation
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
     * @memberof NotificationValidation
     */
    getNotification(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof NotificationValidation
     */
    removeNotification(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new NotificationValidation();
//# sourceMappingURL=validation.js.map