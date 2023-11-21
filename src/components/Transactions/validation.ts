import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { ITransactionsModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class TransactionsValidation
 * @extends Validation
 */
class TransactionsValidation extends Validation {
    /**
     * Creates an instance of TransactionsValidation.
     * @memberof TransactionsValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {ITransactionsModel} params
     * @returns {Joi.ValidationResult<ITransactionsModel >}
     * @memberof TransactionsValidation
     */
    createTransactions(params: ITransactionsModel): Joi.ValidationResult<ITransactionsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            type: Joi.string(),
            status: Joi.string(),
            timestamp: Joi.string(),
            sender: Joi.string(),
            receiver: Joi.string(),
            amount: Joi.number(),
            currency: Joi.string(),
            discription: Joi.string(),
            exchangeRate: Joi.number(),
            fee: Joi.number(),

        });

        return schema.validate(params);
    }

    /**
    * @param {{ id: string }} body
    * @param {ITransactionsModel} params
    * @returns {Joi.ValidationResult<ITransactionsModel >}
    * @memberof TransactionsValidation
    */
    updateTransactions(params: ITransactionsModel): Joi.ValidationResult<ITransactionsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            type: Joi.string(),
            status: Joi.string(),
            timestamp: Joi.string(),
            sender: Joi.string(),
            receiver: Joi.string(),
            amount: Joi.number(),
            currency: Joi.string(),
            discription: Joi.string(),
            exchangeRate: Joi.number(),
            fee: Joi.number(),

        });

        return schema.validate(params);
    }

    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof TransactionsValidation
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
     * @memberof TransactionsValidation
     */
    getTransactions(body: {
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
     * @memberof TransactionsValidation
     */
    removeTransactions(body: {
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

export default new TransactionsValidation();

