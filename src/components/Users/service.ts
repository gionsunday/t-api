import * as Joi from '@hapi/joi';
import UsersModel, { IUsersModel } from './model';
import UsersValidation from './validation';
import { IUsersService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IUsersModelService}
 */
const UsersService: IUsersService = {

    /**
    * @returns {Promise <number>}
    * @memberof UsersService
    */
    async countAll(): Promise<number> {
        try {
            return await UsersModel.countDocuments({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @returns {Promise <number>}
     * @memberof ProductsService
     */
    async countSearch(body: ISearchParamRequest): Promise<number> {
        try {
            const query = GetSearchQuery(body);
            return await UsersModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < IUsersModel[] >}
     * @memberof UsersService
     */
    async findAll(pageNo: number, pageSize: number): Promise<IUsersModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await UsersModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IUsersModel[]>}
    * @memberof UsersService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IUsersModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = UsersValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await UsersModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
    async findOne(id: string): Promise<IUsersModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = UsersValidation.getUsers({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await UsersModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IUsersModel} users
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
    async insert(body: IUsersModel): Promise<IUsersModel> {
        try {
            const validate: Joi.ValidationResult<IUsersModel> = UsersValidation.createUsers(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const users: IUsersModel = await UsersModel.create(body);

            return users;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IUsersModel} users
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
    async update(id: string, body: IUsersModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IUsersModel> = UsersValidation.updateUsers(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const users = await UsersModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return users.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
    async remove(id: string): Promise<IUsersModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = UsersValidation.removeUsers({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const users: IUsersModel = await UsersModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return users;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default UsersService;

