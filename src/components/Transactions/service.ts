import * as Joi from '@hapi/joi';
import TransactionsModel, { ITransactionsModel } from './model';
import TransactionsValidation from './validation';
import { ITransactionsService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {ITransactionsModelService}
 */
const TransactionsService: ITransactionsService = {

    /**
    * @returns {Promise <number>}
    * @memberof TransactionsService
    */
    async countAll(): Promise<number> {
        try {
            return await TransactionsModel.countDocuments({});
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
            return await TransactionsModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < ITransactionsModel[] >}
     * @memberof TransactionsService
     */
    async findAll(pageNo: number, pageSize: number): Promise<ITransactionsModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await TransactionsModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <ITransactionsModel[]>}
    * @memberof TransactionsService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<ITransactionsModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = TransactionsValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await TransactionsModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ITransactionsModel >}
     * @memberof TransactionsService
     */
    async findOne(id: string): Promise<ITransactionsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = TransactionsValidation.getTransactions({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await TransactionsModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ITransactionsModel} transactions
     * @returns {Promise < ITransactionsModel >}
     * @memberof TransactionsService
     */
    async insert(body: ITransactionsModel): Promise<ITransactionsModel> {
        try {
            const validate: Joi.ValidationResult<ITransactionsModel> = TransactionsValidation.createTransactions(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const transactions: ITransactionsModel = await TransactionsModel.create(body);

            return transactions;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {ITransactionsModel} transactions
     * @returns {Promise < ITransactionsModel >}
     * @memberof TransactionsService
     */
    async update(id: string, body: ITransactionsModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<ITransactionsModel> = TransactionsValidation.updateTransactions(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const transactions = await TransactionsModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return transactions.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ITransactionsModel >}
     * @memberof TransactionsService
     */
    async remove(id: string): Promise<ITransactionsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = TransactionsValidation.removeTransactions({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const transactions: ITransactionsModel = await TransactionsModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return transactions;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default TransactionsService;

