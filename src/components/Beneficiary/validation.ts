import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IBeneficiaryModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class BeneficiaryValidation
 * @extends Validation
 */
class BeneficiaryValidation extends Validation {
    /**
     * Creates an instance of BeneficiaryValidation.
     * @memberof BeneficiaryValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IBeneficiaryModel} params
     * @returns {Joi.ValidationResult<IBeneficiaryModel >}
     * @memberof BeneficiaryValidation
     */
    createBeneficiary(params: IBeneficiaryModel): Joi.ValidationResult<IBeneficiaryModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            user: Joi.string(),
            name: Joi.string(),
            accountNumber: Joi.string(),
            companyName: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {{ id: string }} body
    * @param {IBeneficiaryModel} params
    * @returns {Joi.ValidationResult<IBeneficiaryModel >}
    * @memberof BeneficiaryValidation
    */
    updateBeneficiary(params: IBeneficiaryModel): Joi.ValidationResult<IBeneficiaryModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            user: Joi.string(),
            name: Joi.string(),
            accountNumber: Joi.string(),
            companyName: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof BeneficiaryValidation
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
     * @memberof BeneficiaryValidation
     */
    getBeneficiary(body: {
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
     * @memberof BeneficiaryValidation
     */
    removeBeneficiary(body: {
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

export default new BeneficiaryValidation();

