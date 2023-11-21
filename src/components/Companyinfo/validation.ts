import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { ICompanyinfoModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class CompanyinfoValidation
 * @extends Validation
 */
class CompanyinfoValidation extends Validation {
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
    createCompanyinfo(params: ICompanyinfoModel): Joi.ValidationResult<ICompanyinfoModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
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
    updateCompanyinfo(params: ICompanyinfoModel): Joi.ValidationResult<ICompanyinfoModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
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
     * @memberof CompanyinfoValidation
     */
    getCompanyinfo(body: {
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
     * @memberof CompanyinfoValidation
     */
    removeCompanyinfo(body: {
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

export default new CompanyinfoValidation();

