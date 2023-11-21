import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IStatisticsModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class StatisticsValidation
 * @extends Validation
 */
class StatisticsValidation extends Validation {
    /**
     * Creates an instance of StatisticsValidation.
     * @memberof StatisticsValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IStatisticsModel} params
     * @returns {Joi.ValidationResult<IStatisticsModel >}
     * @memberof StatisticsValidation
     */
    createStatistics(params: IStatisticsModel): Joi.ValidationResult<IStatisticsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            date: Joi.string(),
            totalUser: Joi.number(),
            totalTransactions: Joi.number(),
            totalBillsPaid: Joi.number(),

        });

        return schema.validate(params);
    }

    /**
    * @param {{ id: string }} body
    * @param {IStatisticsModel} params
    * @returns {Joi.ValidationResult<IStatisticsModel >}
    * @memberof StatisticsValidation
    */
    updateStatistics(params: IStatisticsModel): Joi.ValidationResult<IStatisticsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            date: Joi.string(),
            totalUser: Joi.number(),
            totalTransactions: Joi.number(),
            totalBillsPaid: Joi.number(),

        });

        return schema.validate(params);
    }

    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof StatisticsValidation
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
     * @memberof StatisticsValidation
     */
    getStatistics(body: {
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
     * @memberof StatisticsValidation
     */
    removeStatistics(body: {
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

export default new StatisticsValidation();

