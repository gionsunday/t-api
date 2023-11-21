import * as Joi from '@hapi/joi';
import SupportticketsModel, { ISupportticketsModel } from './model';
import SupportticketsValidation from './validation';
import { ISupportticketsService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {ISupportticketsModelService}
 */
const SupportticketsService: ISupportticketsService = {

    /**
    * @returns {Promise <number>}
    * @memberof SupportticketsService
    */
    async countAll(): Promise<number> {
        try {
            return await SupportticketsModel.countDocuments({});
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
            return await SupportticketsModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < ISupportticketsModel[] >}
     * @memberof SupportticketsService
     */
    async findAll(pageNo: number, pageSize: number): Promise<ISupportticketsModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await SupportticketsModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <ISupportticketsModel[]>}
    * @memberof SupportticketsService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<ISupportticketsModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = SupportticketsValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await SupportticketsModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ISupportticketsModel >}
     * @memberof SupportticketsService
     */
    async findOne(id: string): Promise<ISupportticketsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = SupportticketsValidation.getSupporttickets({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await SupportticketsModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ISupportticketsModel} supportTickets
     * @returns {Promise < ISupportticketsModel >}
     * @memberof SupportticketsService
     */
    async insert(body: ISupportticketsModel): Promise<ISupportticketsModel> {
        try {
            const validate: Joi.ValidationResult<ISupportticketsModel> = SupportticketsValidation.createSupporttickets(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const supportTickets: ISupportticketsModel = await SupportticketsModel.create(body);

            return supportTickets;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {ISupportticketsModel} supportTickets
     * @returns {Promise < ISupportticketsModel >}
     * @memberof SupportticketsService
     */
    async update(id: string, body: ISupportticketsModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<ISupportticketsModel> = SupportticketsValidation.updateSupporttickets(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const supportTickets = await SupportticketsModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return supportTickets.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ISupportticketsModel >}
     * @memberof SupportticketsService
     */
    async remove(id: string): Promise<ISupportticketsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = SupportticketsValidation.removeSupporttickets({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const supportTickets: ISupportticketsModel = await SupportticketsModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return supportTickets;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default SupportticketsService;

