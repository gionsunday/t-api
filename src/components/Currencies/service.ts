import * as Joi from '@hapi/joi';
import CurrenciesModel, { ICurrenciesModel } from './model';
import CurrenciesValidation from './validation';
import { ICurrenciesService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {ICurrenciesModelService}
 */
const CurrenciesService: ICurrenciesService = {

    /**
    * @returns {Promise <number>}
    * @memberof CurrenciesService
    */
    async countAll(): Promise<number> {
        try {
            return await CurrenciesModel.countDocuments({});
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
            return await CurrenciesModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < ICurrenciesModel[] >}
     * @memberof CurrenciesService
     */
    async findAll(pageNo: number, pageSize: number): Promise<ICurrenciesModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await CurrenciesModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <ICurrenciesModel[]>}
    * @memberof CurrenciesService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<ICurrenciesModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = CurrenciesValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await CurrenciesModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICurrenciesModel >}
     * @memberof CurrenciesService
     */
    async findOne(id: string): Promise<ICurrenciesModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = CurrenciesValidation.getCurrencies({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await CurrenciesModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ICurrenciesModel} currencies
     * @returns {Promise < ICurrenciesModel >}
     * @memberof CurrenciesService
     */
    async insert(body: ICurrenciesModel): Promise<ICurrenciesModel> {
        try {
            const validate: Joi.ValidationResult<ICurrenciesModel> = CurrenciesValidation.createCurrencies(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const currencies: ICurrenciesModel = await CurrenciesModel.create(body);

            return currencies;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {ICurrenciesModel} currencies
     * @returns {Promise < ICurrenciesModel >}
     * @memberof CurrenciesService
     */
    async update(id: string, body: ICurrenciesModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<ICurrenciesModel> = CurrenciesValidation.updateCurrencies(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const currencies = await CurrenciesModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return currencies.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICurrenciesModel >}
     * @memberof CurrenciesService
     */
    async remove(id: string): Promise<ICurrenciesModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = CurrenciesValidation.removeCurrencies({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const currencies: ICurrenciesModel = await CurrenciesModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return currencies;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default CurrenciesService;

