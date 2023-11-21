import * as Joi from '@hapi/joi';
import StatisticsModel, { IStatisticsModel } from './model';
import StatisticsValidation from './validation';
import { IStatisticsService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IStatisticsModelService}
 */
const StatisticsService: IStatisticsService = {

    /**
    * @returns {Promise <number>}
    * @memberof StatisticsService
    */
    async countAll(): Promise<number> {
        try {
            return await StatisticsModel.countDocuments({});
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
            return await StatisticsModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < IStatisticsModel[] >}
     * @memberof StatisticsService
     */
    async findAll(pageNo: number, pageSize: number): Promise<IStatisticsModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await StatisticsModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IStatisticsModel[]>}
    * @memberof StatisticsService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IStatisticsModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = StatisticsValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await StatisticsModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IStatisticsModel >}
     * @memberof StatisticsService
     */
    async findOne(id: string): Promise<IStatisticsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = StatisticsValidation.getStatistics({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await StatisticsModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IStatisticsModel} statistics
     * @returns {Promise < IStatisticsModel >}
     * @memberof StatisticsService
     */
    async insert(body: IStatisticsModel): Promise<IStatisticsModel> {
        try {
            const validate: Joi.ValidationResult<IStatisticsModel> = StatisticsValidation.createStatistics(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const statistics: IStatisticsModel = await StatisticsModel.create(body);

            return statistics;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IStatisticsModel} statistics
     * @returns {Promise < IStatisticsModel >}
     * @memberof StatisticsService
     */
    async update(id: string, body: IStatisticsModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IStatisticsModel> = StatisticsValidation.updateStatistics(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const statistics = await StatisticsModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return statistics.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IStatisticsModel >}
     * @memberof StatisticsService
     */
    async remove(id: string): Promise<IStatisticsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = StatisticsValidation.removeStatistics({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const statistics: IStatisticsModel = await StatisticsModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return statistics;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default StatisticsService;

