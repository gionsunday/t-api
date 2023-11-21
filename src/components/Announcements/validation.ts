import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IAnnouncementsModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class AnnouncementsValidation
 * @extends Validation
 */
class AnnouncementsValidation extends Validation {
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
    createAnnouncements(params: IAnnouncementsModel): Joi.ValidationResult<IAnnouncementsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
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
    updateAnnouncements(params: IAnnouncementsModel): Joi.ValidationResult<IAnnouncementsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
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
     * @memberof AnnouncementsValidation
     */
    getAnnouncements(body: {
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
     * @memberof AnnouncementsValidation
     */
    removeAnnouncements(body: {
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

export default new AnnouncementsValidation();

