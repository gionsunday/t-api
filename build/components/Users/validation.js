"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class UsersValidation
 * @extends Validation
 */
class UsersValidation extends validation_1.default {
    /**
     * Creates an instance of UsersValidation.
     * @memberof UsersValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {IUsersModel} params
     * @returns {Joi.ValidationResult<IUsersModel >}
     * @memberof UsersValidation
     */
    createUsers(params) {
        const schema = Joi.object().keys({
            email: Joi.string(),
            password: Joi.string(),
            profile: Joi.object(),
            username: Joi.string(),
            wallet: Joi.object(),
        });
        return schema.validate(params);
    }
    /**
    * @param {{ id: string }} body
    * @param {IUsersModel} params
    * @returns {Joi.ValidationResult<IUsersModel >}
    * @memberof UsersValidation
    */
    updateUsers(params) {
        const schema = Joi.object().keys({
            email: Joi.string(),
            password: Joi.string(),
            profile: Joi.object(),
            username: Joi.string(),
            wallet: Joi.object(),
        });
        return schema.validate(params);
    }
    /**
    * @param {ISearchParamRequest} params
    * @returns {Joi.ValidationResult<ISearchParamRequest >}
    * @memberof UsersValidation
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
     * @memberof UsersValidation
     */
    getUsers(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof UsersValidation
     */
    removeUsers(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new UsersValidation();
//# sourceMappingURL=validation.js.map