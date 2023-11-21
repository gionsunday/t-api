import * as Joi from '@hapi/joi';
import BeneficiaryModel, { IBeneficiaryModel } from './model';
import BeneficiaryValidation from './validation';
import { IBeneficiaryService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IBeneficiaryModelService}
 */
const BeneficiaryService: IBeneficiaryService = {

    /**
    * @returns {Promise <number>}
    * @memberof BeneficiaryService
    */
    async countAll(): Promise<number> {
        try {
            return await BeneficiaryModel.countDocuments({});
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
            return await BeneficiaryModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < IBeneficiaryModel[] >}
     * @memberof BeneficiaryService
     */
    async findAll(pageNo: number, pageSize: number): Promise<IBeneficiaryModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await BeneficiaryModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IBeneficiaryModel[]>}
    * @memberof BeneficiaryService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IBeneficiaryModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = BeneficiaryValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await BeneficiaryModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IBeneficiaryModel >}
     * @memberof BeneficiaryService
     */
    async findOne(id: string): Promise<IBeneficiaryModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = BeneficiaryValidation.getBeneficiary({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await BeneficiaryModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IBeneficiaryModel} beneficiary
     * @returns {Promise < IBeneficiaryModel >}
     * @memberof BeneficiaryService
     */
    async insert(body: IBeneficiaryModel): Promise<IBeneficiaryModel> {
        try {
            const validate: Joi.ValidationResult<IBeneficiaryModel> = BeneficiaryValidation.createBeneficiary(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const beneficiary: IBeneficiaryModel = await BeneficiaryModel.create(body);

            return beneficiary;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IBeneficiaryModel} beneficiary
     * @returns {Promise < IBeneficiaryModel >}
     * @memberof BeneficiaryService
     */
    async update(id: string, body: IBeneficiaryModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IBeneficiaryModel> = BeneficiaryValidation.updateBeneficiary(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const beneficiary = await BeneficiaryModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return beneficiary.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IBeneficiaryModel >}
     * @memberof BeneficiaryService
     */
    async remove(id: string): Promise<IBeneficiaryModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = BeneficiaryValidation.removeBeneficiary({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const beneficiary: IBeneficiaryModel = await BeneficiaryModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return beneficiary;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default BeneficiaryService;

