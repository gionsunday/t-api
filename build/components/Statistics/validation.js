"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class StatisticsValidation
 * @extends Validation
 */
class StatisticsValidation extends validation_1.default {
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
    createStatistics(params) {
        const schema = Joi.object().keys({
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
    updateStatistics(params) {
        const schema = Joi.object().keys({
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
     * @memberof StatisticsValidation
     */
    getStatistics(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof StatisticsValidation
     */
    removeStatistics(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new StatisticsValidation();
//# sourceMappingURL=validation.js.map