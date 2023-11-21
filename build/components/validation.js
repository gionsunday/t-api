"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const mongoose_1 = require("mongoose");
/**
 * @export
 * @class Validation
 */
class Validation {
    /**
     * Creates an instance of Schema.
     * @memberof JoiSchema
     */
    constructor() {
        /**
         * @static
         * @type {string}
         * @memberof JoiSchema
         */
        this.messageObjectId = 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters';
        this.customJoi = Joi.extend((joi) => ({
            type: 'objectId',
            base: joi.string(),
            messages: {
                objectId: this.messageObjectId,
            },
            validate(value, helpers) {
                if (!mongoose_1.Types.ObjectId.isValid(value)) {
                    return { value: mongoose_1.Types.ObjectId(value), errors: helpers.error('objectId') };
                }
            },
        }));
    }
}
exports.default = Validation;
//# sourceMappingURL=validation.js.map