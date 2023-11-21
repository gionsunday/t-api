import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IBillsModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class BillsValidation
 * @extends Validation
 */
class BillsValidation extends Validation {
    /**
     * Creates an instance of BillsValidation.
     * @memberof BillsValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IBillsModel} params
     * @returns {Joi.ValidationResult<IBillsModel >}
     * @memberof BillsValidation
     */
    createBills(params: IBillsModel): Joi.ValidationResult<IBillsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            name: Joi.string(),
            companyName: Joi.string(),
            user: Joi.string(),
            amount: Joi.number(),
            currency: Joi.string(),
            dueDate: Joi.string(),
            status: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {{ id: string }} body
    * @param {IBillsModel} params
    * @returns {Joi.ValidationResult<IBillsModel >}
    * @memberof BillsValidation
    */
    updateBills(params: IBillsModel): Joi.ValidationResult<IBillsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            name: Joi.string(),
            companyName: Joi.string(),
            user: Joi.string(),
            amount: Joi.number(),
            currency: Joi.string(),
            dueDate: Joi.string(),
            status: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof BillsValidation
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
     * @memberof BillsValidation
     */
    getBills(body: {
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
     * @memberof BillsValidation
     */
    removeBills(body: {
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

export default new BillsValidation();

