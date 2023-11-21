import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IBankaccountsModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class BankaccountsValidation
 * @extends Validation
 */
class BankaccountsValidation extends Validation {
    /**
     * Creates an instance of BankaccountsValidation.
     * @memberof BankaccountsValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IBankaccountsModel} params
     * @returns {Joi.ValidationResult<IBankaccountsModel >}
     * @memberof BankaccountsValidation
     */
    createBankaccounts(params: IBankaccountsModel): Joi.ValidationResult<IBankaccountsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            user: Joi.string(),
            bankName: Joi.string(),
            accountNumber: Joi.string(),
            routingNumber: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {{ id: string }} body
    * @param {IBankaccountsModel} params
    * @returns {Joi.ValidationResult<IBankaccountsModel >}
    * @memberof BankaccountsValidation
    */
    updateBankaccounts(params: IBankaccountsModel): Joi.ValidationResult<IBankaccountsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            user: Joi.string(),
            bankName: Joi.string(),
            accountNumber: Joi.string(),
            routingNumber: Joi.string(),

        });

        return schema.validate(params);
    }

    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof BankaccountsValidation
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
     * @memberof BankaccountsValidation
     */
    getBankaccounts(body: {
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
     * @memberof BankaccountsValidation
     */
    removeBankaccounts(body: {
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

export default new BankaccountsValidation();

