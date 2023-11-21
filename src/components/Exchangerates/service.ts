import * as Joi from '@hapi/joi';
import ExchangeratesModel, { IExchangeratesModel } from './model';
import ExchangeratesValidation from './validation';
import { IExchangeratesService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IExchangeratesModelService}
 */
const ExchangeratesService: IExchangeratesService = {

    /**
    * @returns {Promise <number>}
    * @memberof ExchangeratesService
    */
    async countAll(): Promise<number> {
        try {
            return await ExchangeratesModel.countDocuments({});
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
            return await ExchangeratesModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < IExchangeratesModel[] >}
     * @memberof ExchangeratesService
     */
    async findAll(pageNo: number, pageSize: number): Promise<IExchangeratesModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await ExchangeratesModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IExchangeratesModel[]>}
    * @memberof ExchangeratesService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IExchangeratesModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = ExchangeratesValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await ExchangeratesModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IExchangeratesModel >}
     * @memberof ExchangeratesService
     */
    async findOne(id: string): Promise<IExchangeratesModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = ExchangeratesValidation.getExchangerates({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ExchangeratesModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IExchangeratesModel} exchangeRates
     * @returns {Promise < IExchangeratesModel >}
     * @memberof ExchangeratesService
     */
    async insert(body: IExchangeratesModel): Promise<IExchangeratesModel> {
        try {
            const validate: Joi.ValidationResult<IExchangeratesModel> = ExchangeratesValidation.createExchangerates(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const exchangeRates: IExchangeratesModel = await ExchangeratesModel.create(body);

            return exchangeRates;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IExchangeratesModel} exchangeRates
     * @returns {Promise < IExchangeratesModel >}
     * @memberof ExchangeratesService
     */
    async update(id: string, body: IExchangeratesModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IExchangeratesModel> = ExchangeratesValidation.updateExchangerates(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const exchangeRates = await ExchangeratesModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return exchangeRates.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IExchangeratesModel >}
     * @memberof ExchangeratesService
     */
    async remove(id: string): Promise<IExchangeratesModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = ExchangeratesValidation.removeExchangerates({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const exchangeRates: IExchangeratesModel = await ExchangeratesModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return exchangeRates;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default ExchangeratesService;

