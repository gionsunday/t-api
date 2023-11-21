import * as Joi from '@hapi/joi';
import SettingsModel, { ISettingsModel } from './model';
import SettingsValidation from './validation';
import { ISettingsService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {ISettingsModelService}
 */
const SettingsService: ISettingsService = {

    /**
    * @returns {Promise <number>}
    * @memberof SettingsService
    */
    async countAll(): Promise<number> {
        try {
            return await SettingsModel.countDocuments({});
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
            return await SettingsModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < ISettingsModel[] >}
     * @memberof SettingsService
     */
    async findAll(pageNo: number, pageSize: number): Promise<ISettingsModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await SettingsModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <ISettingsModel[]>}
    * @memberof SettingsService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<ISettingsModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = SettingsValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await SettingsModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ISettingsModel >}
     * @memberof SettingsService
     */
    async findOne(id: string): Promise<ISettingsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = SettingsValidation.getSettings({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await SettingsModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ISettingsModel} settings
     * @returns {Promise < ISettingsModel >}
     * @memberof SettingsService
     */
    async insert(body: ISettingsModel): Promise<ISettingsModel> {
        try {
            const validate: Joi.ValidationResult<ISettingsModel> = SettingsValidation.createSettings(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const settings: ISettingsModel = await SettingsModel.create(body);

            return settings;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {ISettingsModel} settings
     * @returns {Promise < ISettingsModel >}
     * @memberof SettingsService
     */
    async update(id: string, body: ISettingsModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<ISettingsModel> = SettingsValidation.updateSettings(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const settings = await SettingsModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return settings.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ISettingsModel >}
     * @memberof SettingsService
     */
    async remove(id: string): Promise<ISettingsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = SettingsValidation.removeSettings({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const settings: ISettingsModel = await SettingsModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return settings;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default SettingsService;

