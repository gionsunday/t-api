import * as Joi from '@hapi/joi';
import BillsModel, { IBillsModel } from './model';
import BillsValidation from './validation';
import { IBillsService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IBillsModelService}
 */
const BillsService: IBillsService = {

    /**
    * @returns {Promise <number>}
    * @memberof BillsService
    */
    async countAll(): Promise<number> {
        try {
            return await BillsModel.countDocuments({});
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
            return await BillsModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < IBillsModel[] >}
     * @memberof BillsService
     */
    async findAll(pageNo: number, pageSize: number): Promise<IBillsModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await BillsModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IBillsModel[]>}
    * @memberof BillsService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IBillsModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = BillsValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await BillsModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IBillsModel >}
     * @memberof BillsService
     */
    async findOne(id: string): Promise<IBillsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = BillsValidation.getBills({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await BillsModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IBillsModel} bills
     * @returns {Promise < IBillsModel >}
     * @memberof BillsService
     */
    async insert(body: IBillsModel): Promise<IBillsModel> {
        try {
            const validate: Joi.ValidationResult<IBillsModel> = BillsValidation.createBills(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const bills: IBillsModel = await BillsModel.create(body);

            return bills;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IBillsModel} bills
     * @returns {Promise < IBillsModel >}
     * @memberof BillsService
     */
    async update(id: string, body: IBillsModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IBillsModel> = BillsValidation.updateBills(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const bills = await BillsModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return bills.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IBillsModel >}
     * @memberof BillsService
     */
    async remove(id: string): Promise<IBillsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = BillsValidation.removeBills({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const bills: IBillsModel = await BillsModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return bills;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default BillsService;

