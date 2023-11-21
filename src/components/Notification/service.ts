import * as Joi from '@hapi/joi';
import NotificationModel, { INotificationModel } from './model';
import NotificationValidation from './validation';
import { INotificationService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {INotificationModelService}
 */
const NotificationService: INotificationService = {

    /**
    * @returns {Promise <number>}
    * @memberof NotificationService
    */
    async countAll(): Promise<number> {
        try {
            return await NotificationModel.countDocuments({});
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
            return await NotificationModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < INotificationModel[] >}
     * @memberof NotificationService
     */
    async findAll(pageNo: number, pageSize: number): Promise<INotificationModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await NotificationModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <INotificationModel[]>}
    * @memberof NotificationService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<INotificationModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = NotificationValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await NotificationModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < INotificationModel >}
     * @memberof NotificationService
     */
    async findOne(id: string): Promise<INotificationModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = NotificationValidation.getNotification({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await NotificationModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {INotificationModel} notification
     * @returns {Promise < INotificationModel >}
     * @memberof NotificationService
     */
    async insert(body: INotificationModel): Promise<INotificationModel> {
        try {
            const validate: Joi.ValidationResult<INotificationModel> = NotificationValidation.createNotification(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const notification: INotificationModel = await NotificationModel.create(body);

            return notification;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {INotificationModel} notification
     * @returns {Promise < INotificationModel >}
     * @memberof NotificationService
     */
    async update(id: string, body: INotificationModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<INotificationModel> = NotificationValidation.updateNotification(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const notification = await NotificationModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return notification.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < INotificationModel >}
     * @memberof NotificationService
     */
    async remove(id: string): Promise<INotificationModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = NotificationValidation.removeNotification({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const notification: INotificationModel = await NotificationModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return notification;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default NotificationService;

