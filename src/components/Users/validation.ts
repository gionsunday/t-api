import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IUsersModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class UsersValidation
 * @extends Validation
 */
class UsersValidation extends Validation {
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
    createUsers(params: IUsersModel): Joi.ValidationResult<IUsersModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
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
    updateUsers(params: IUsersModel): Joi.ValidationResult<IUsersModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
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
     * @memberof UsersValidation
     */
    getUsers(body: {
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
     * @memberof UsersValidation
     */
    removeUsers(body: {
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

export default new UsersValidation();

