import * as Joi from '@hapi/joi';
import RecipientsModel, { IRecipientsModel } from './model';
import RecipientsValidation from './validation';
import { IRecipientsService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IRecipientsModelService}
 */
const RecipientsService: IRecipientsService = {

    /**
    * @returns {Promise <number>}
    * @memberof RecipientsService
    */
    async countAll(): Promise<number> {
        try {
            return await RecipientsModel.countDocuments({});
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
            return await RecipientsModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < IRecipientsModel[] >}
     * @memberof RecipientsService
     */
    async findAll(pageNo: number, pageSize: number): Promise<IRecipientsModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await RecipientsModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IRecipientsModel[]>}
    * @memberof RecipientsService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IRecipientsModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = RecipientsValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await RecipientsModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IRecipientsModel >}
     * @memberof RecipientsService
     */
    async findOne(id: string): Promise<IRecipientsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = RecipientsValidation.getRecipients({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await RecipientsModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IRecipientsModel} recipients
     * @returns {Promise < IRecipientsModel >}
     * @memberof RecipientsService
     */
    async insert(body: IRecipientsModel): Promise<IRecipientsModel> {
        try {
            const validate: Joi.ValidationResult<IRecipientsModel> = RecipientsValidation.createRecipients(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const recipients: IRecipientsModel = await RecipientsModel.create(body);

            return recipients;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IRecipientsModel} recipients
     * @returns {Promise < IRecipientsModel >}
     * @memberof RecipientsService
     */
    async update(id: string, body: IRecipientsModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IRecipientsModel> = RecipientsValidation.updateRecipients(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const recipients = await RecipientsModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return recipients.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IRecipientsModel >}
     * @memberof RecipientsService
     */
    async remove(id: string): Promise<IRecipientsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = RecipientsValidation.removeRecipients({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const recipients: IRecipientsModel = await RecipientsModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return recipients;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default RecipientsService;

