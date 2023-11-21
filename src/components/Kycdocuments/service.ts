import * as Joi from '@hapi/joi';
import KycdocumentsModel, { IKycdocumentsModel } from './model';
import KycdocumentsValidation from './validation';
import { IKycdocumentsService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IKycdocumentsModelService}
 */
const KycdocumentsService: IKycdocumentsService = {

    /**
    * @returns {Promise <number>}
    * @memberof KycdocumentsService
    */
    async countAll(): Promise<number> {
        try {
            return await KycdocumentsModel.countDocuments({});
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
            return await KycdocumentsModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < IKycdocumentsModel[] >}
     * @memberof KycdocumentsService
     */
    async findAll(pageNo: number, pageSize: number): Promise<IKycdocumentsModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await KycdocumentsModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IKycdocumentsModel[]>}
    * @memberof KycdocumentsService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IKycdocumentsModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = KycdocumentsValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await KycdocumentsModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IKycdocumentsModel >}
     * @memberof KycdocumentsService
     */
    async findOne(id: string): Promise<IKycdocumentsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = KycdocumentsValidation.getKycdocuments({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await KycdocumentsModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IKycdocumentsModel} kycDocuments
     * @returns {Promise < IKycdocumentsModel >}
     * @memberof KycdocumentsService
     */
    async insert(body: IKycdocumentsModel): Promise<IKycdocumentsModel> {
        try {
            const validate: Joi.ValidationResult<IKycdocumentsModel> = KycdocumentsValidation.createKycdocuments(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const kycDocuments: IKycdocumentsModel = await KycdocumentsModel.create(body);

            return kycDocuments;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IKycdocumentsModel} kycDocuments
     * @returns {Promise < IKycdocumentsModel >}
     * @memberof KycdocumentsService
     */
    async update(id: string, body: IKycdocumentsModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IKycdocumentsModel> = KycdocumentsValidation.updateKycdocuments(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const kycDocuments = await KycdocumentsModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return kycDocuments.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IKycdocumentsModel >}
     * @memberof KycdocumentsService
     */
    async remove(id: string): Promise<IKycdocumentsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = KycdocumentsValidation.removeKycdocuments({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const kycDocuments: IKycdocumentsModel = await KycdocumentsModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return kycDocuments;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default KycdocumentsService;

