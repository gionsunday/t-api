import * as Joi from '@hapi/joi';
import AnnouncementsModel, { IAnnouncementsModel } from './model';
import AnnouncementsValidation from './validation';
import { IAnnouncementsService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IAnnouncementsModelService}
 */
const AnnouncementsService: IAnnouncementsService = {

    /**
    * @returns {Promise <number>}
    * @memberof AnnouncementsService
    */
    async countAll(): Promise<number> {
        try {
            return await AnnouncementsModel.countDocuments({});
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
            return await AnnouncementsModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < IAnnouncementsModel[] >}
     * @memberof AnnouncementsService
     */
    async findAll(pageNo: number, pageSize: number): Promise<IAnnouncementsModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await AnnouncementsModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IAnnouncementsModel[]>}
    * @memberof AnnouncementsService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IAnnouncementsModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = AnnouncementsValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await AnnouncementsModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IAnnouncementsModel >}
     * @memberof AnnouncementsService
     */
    async findOne(id: string): Promise<IAnnouncementsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = AnnouncementsValidation.getAnnouncements({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await AnnouncementsModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IAnnouncementsModel} announcements
     * @returns {Promise < IAnnouncementsModel >}
     * @memberof AnnouncementsService
     */
    async insert(body: IAnnouncementsModel): Promise<IAnnouncementsModel> {
        try {
            const validate: Joi.ValidationResult<IAnnouncementsModel> = AnnouncementsValidation.createAnnouncements(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const announcements: IAnnouncementsModel = await AnnouncementsModel.create(body);

            return announcements;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IAnnouncementsModel} announcements
     * @returns {Promise < IAnnouncementsModel >}
     * @memberof AnnouncementsService
     */
    async update(id: string, body: IAnnouncementsModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IAnnouncementsModel> = AnnouncementsValidation.updateAnnouncements(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const announcements = await AnnouncementsModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return announcements.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IAnnouncementsModel >}
     * @memberof AnnouncementsService
     */
    async remove(id: string): Promise<IAnnouncementsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = AnnouncementsValidation.removeAnnouncements({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const announcements: IAnnouncementsModel = await AnnouncementsModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return announcements;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default AnnouncementsService;

