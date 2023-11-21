import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { INotificationModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class NotificationValidation
 * @extends Validation
 */
class NotificationValidation extends Validation {
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
    createNotification(params: INotificationModel): Joi.ValidationResult<INotificationModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
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
    updateNotification(params: INotificationModel): Joi.ValidationResult<INotificationModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
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
    searchParams(params: ISearchParamRequest): Joi.ValidationResult<ISearchParamRequest> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
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
    getNotification(body: {
        id: string;
    }): Joi.ValidationResult<{
        id: string;
    }> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof NotificationValidation
     */
    removeNotification(body: {
        id: string;
    }): Joi.ValidationResult<{
        id: string;
    }> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }
}

export default new NotificationValidation();

