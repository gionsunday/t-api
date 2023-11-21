import * as Joi from '@hapi/joi';
import AuditlogModel, { IAuditlogModel } from './model';
import AuditlogValidation from './validation';
import { IAuditlogService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IAuditlogModelService}
 */
const AuditlogService: IAuditlogService = {

    /**
    * @returns {Promise <number>}
    * @memberof AuditlogService
    */
    async countAll(): Promise<number> {
        try {
            return await AuditlogModel.countDocuments({});
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
            return await AuditlogModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < IAuditlogModel[] >}
     * @memberof AuditlogService
     */
    async findAll(pageNo: number, pageSize: number): Promise<IAuditlogModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await AuditlogModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IAuditlogModel[]>}
    * @memberof AuditlogService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IAuditlogModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = AuditlogValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await AuditlogModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IAuditlogModel >}
     * @memberof AuditlogService
     */
    async findOne(id: string): Promise<IAuditlogModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = AuditlogValidation.getAuditlog({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await AuditlogModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IAuditlogModel} auditLog
     * @returns {Promise < IAuditlogModel >}
     * @memberof AuditlogService
     */
    async insert(body: IAuditlogModel): Promise<IAuditlogModel> {
        try {
            const validate: Joi.ValidationResult<IAuditlogModel> = AuditlogValidation.createAuditlog(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const auditLog: IAuditlogModel = await AuditlogModel.create(body);

            return auditLog;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IAuditlogModel} auditLog
     * @returns {Promise < IAuditlogModel >}
     * @memberof AuditlogService
     */
    async update(id: string, body: IAuditlogModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IAuditlogModel> = AuditlogValidation.updateAuditlog(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const auditLog = await AuditlogModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return auditLog.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IAuditlogModel >}
     * @memberof AuditlogService
     */
    async remove(id: string): Promise<IAuditlogModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = AuditlogValidation.removeAuditlog({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const auditLog: IAuditlogModel = await AuditlogModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return auditLog;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default AuditlogService;

