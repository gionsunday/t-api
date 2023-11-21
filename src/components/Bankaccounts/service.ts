import * as Joi from '@hapi/joi';
import BankaccountsModel, { IBankaccountsModel } from './model';
import BankaccountsValidation from './validation';
import { IBankaccountsService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IBankaccountsModelService}
 */
const BankaccountsService: IBankaccountsService = {

    /**
    * @returns {Promise <number>}
    * @memberof BankaccountsService
    */
    async countAll(): Promise<number> {
        try {
            return await BankaccountsModel.countDocuments({});
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
            return await BankaccountsModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < IBankaccountsModel[] >}
     * @memberof BankaccountsService
     */
    async findAll(pageNo: number, pageSize: number): Promise<IBankaccountsModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await BankaccountsModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IBankaccountsModel[]>}
    * @memberof BankaccountsService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IBankaccountsModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = BankaccountsValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await BankaccountsModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IBankaccountsModel >}
     * @memberof BankaccountsService
     */
    async findOne(id: string): Promise<IBankaccountsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = BankaccountsValidation.getBankaccounts({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await BankaccountsModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IBankaccountsModel} bankAccounts
     * @returns {Promise < IBankaccountsModel >}
     * @memberof BankaccountsService
     */
    async insert(body: IBankaccountsModel): Promise<IBankaccountsModel> {
        try {
            const validate: Joi.ValidationResult<IBankaccountsModel> = BankaccountsValidation.createBankaccounts(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const bankAccounts: IBankaccountsModel = await BankaccountsModel.create(body);

            return bankAccounts;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IBankaccountsModel} bankAccounts
     * @returns {Promise < IBankaccountsModel >}
     * @memberof BankaccountsService
     */
    async update(id: string, body: IBankaccountsModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IBankaccountsModel> = BankaccountsValidation.updateBankaccounts(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const bankAccounts = await BankaccountsModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return bankAccounts.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IBankaccountsModel >}
     * @memberof BankaccountsService
     */
    async remove(id: string): Promise<IBankaccountsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = BankaccountsValidation.removeBankaccounts({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const bankAccounts: IBankaccountsModel = await BankaccountsModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return bankAccounts;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default BankaccountsService;

