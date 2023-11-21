"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class KycdocumentsValidation
 * @extends Validation
 */
class KycdocumentsValidation extends validation_1.default {
    /**
     * Creates an instance of KycdocumentsValidation.
     * @memberof KycdocumentsValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {IKycdocumentsModel} params
     * @returns {Joi.ValidationResult<IKycdocumentsModel >}
     * @memberof KycdocumentsValidation
     */
    createKycdocuments(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            documentType: Joi.string(),
            documentNumber: Joi.string(),
            issueDate: Joi.string(),
            expiryDate: Joi.string(),
            imageURL: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {IKycdocumentsModel} params
    * @returns {Joi.ValidationResult<IKycdocumentsModel >}
    * @memberof KycdocumentsValidation
    */
    updateKycdocuments(params) {
        const schema = Joi.object().keys({
            user: Joi.string(),
            documentType: Joi.string(),
            documentNumber: Joi.string(),
            issueDate: Joi.string(),
            expiryDate: Joi.string(),
            imageURL: Joi.string(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof KycdocumentsValidation
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
     * @memberof KycdocumentsValidation
     */
    getKycdocuments(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof KycdocumentsValidation
     */
    removeKycdocuments(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new KycdocumentsValidation();
//# sourceMappingURL=validation.js.map