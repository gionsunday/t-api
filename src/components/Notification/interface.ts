import { ISearchParamRequest } from '@/utils/SearchHelper';
import { INotificationModel } from './model';

/**
 * @export
 * @interface INotificationService
 */
export interface INotificationService {
    /**
    * @returns {Promise <number>}
    * @memberof NotificationService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof NotificationService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<INotificationModel[]>}
     * @memberof INotificationService
     */
    findAll(pageNo: number, pageSize: number): Promise<INotificationModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<INotificationModel[]>}
     * @memberof INotificationService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<INotificationModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<INotificationModel>}
     * @memberof INotificationService
     */
    findOne(code: string): Promise<INotificationModel>;

    /**
     * @param {INotificationModel} INotificationModel
     * @returns {Promise<INotificationModel>}
     * @memberof INotificationService
     */
    insert(INotificationModel: INotificationModel): Promise<INotificationModel>;

    /**
     * @param {string} id
     * @param {INotificationModel} INotificationModel
     * @returns {Promise<INotificationModel>}
     * @memberof INotificationService
     */
    update(id: string, INotificationModel: INotificationModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<INotificationModel>}
     * @memberof INotificationService
     */
    remove(id: string): Promise<INotificationModel>;
}

