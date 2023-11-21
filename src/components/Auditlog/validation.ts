import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IAuditlogModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class AuditlogValidation
 * @extends Validation
 */
class AuditlogValidation extends Validation {
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
    createAuditlog(params: IAuditlogModel): Joi.ValidationResult<IAuditlogModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
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
    updateAuditlog(params: IAuditlogModel): Joi.ValidationResult<IAuditlogModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
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
     * @memberof AuditlogValidation
     */
    getAuditlog(body: {
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
     * @memberof AuditlogValidation
     */
    removeAuditlog(body: {
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

export default new AuditlogValidation();

