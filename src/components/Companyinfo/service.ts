import * as Joi from '@hapi/joi';
import CompanyinfoModel, { ICompanyinfoModel } from './model';
import CompanyinfoValidation from './validation';
import { ICompanyinfoService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {ICompanyinfoModelService}
 */
const CompanyinfoService: ICompanyinfoService = {

    /**
    * @returns {Promise <number>}
    * @memberof CompanyinfoService
    */
    async countAll(): Promise<number> {
        try {
            return await CompanyinfoModel.countDocuments({});
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
            return await CompanyinfoModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < ICompanyinfoModel[] >}
     * @memberof CompanyinfoService
     */
    async findAll(pageNo: number, pageSize: number): Promise<ICompanyinfoModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await CompanyinfoModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <ICompanyinfoModel[]>}
    * @memberof CompanyinfoService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<ICompanyinfoModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = CompanyinfoValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await CompanyinfoModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICompanyinfoModel >}
     * @memberof CompanyinfoService
     */
    async findOne(id: string): Promise<ICompanyinfoModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = CompanyinfoValidation.getCompanyinfo({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await CompanyinfoModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ICompanyinfoModel} companyInfo
     * @returns {Promise < ICompanyinfoModel >}
     * @memberof CompanyinfoService
     */
    async insert(body: ICompanyinfoModel): Promise<ICompanyinfoModel> {
        try {
            const validate: Joi.ValidationResult<ICompanyinfoModel> = CompanyinfoValidation.createCompanyinfo(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const companyInfo: ICompanyinfoModel = await CompanyinfoModel.create(body);

            return companyInfo;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {ICompanyinfoModel} companyInfo
     * @returns {Promise < ICompanyinfoModel >}
     * @memberof CompanyinfoService
     */
    async update(id: string, body: ICompanyinfoModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<ICompanyinfoModel> = CompanyinfoValidation.updateCompanyinfo(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const companyInfo = await CompanyinfoModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return companyInfo.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICompanyinfoModel >}
     * @memberof CompanyinfoService
     */
    async remove(id: string): Promise<ICompanyinfoModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = CompanyinfoValidation.removeCompanyinfo({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const companyInfo: ICompanyinfoModel = await CompanyinfoModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return companyInfo;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default CompanyinfoService;

