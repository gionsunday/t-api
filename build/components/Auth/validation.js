"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const validation_1 = require("@/components/validation");
/**
 * @export
 * @class AuthValidation
 * @extends Validation
 */
class AuthValidation extends validation_1.default {
    /**
     * Creates an instance of AuthValidation.
     * @memberof AuthValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {ITokenRequest} params
     * @returns {Joi.ValidationResult<ITokenRequest>}
     * @memberof TokenValidation
     */
    validteTokenInput(params) {
        const schema = Joi.object().keys({
            password: Joi.string().required(),
            email: Joi.string().required(),
        });
        return schema.validate(params);
    }
}
exports.default = new AuthValidation();
//# sourceMappingURL=validation.js.map