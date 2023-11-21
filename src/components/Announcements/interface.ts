import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IAnnouncementsModel } from './model';

/**
 * @export
 * @interface IAnnouncementsService
 */
export interface IAnnouncementsService {
    /**
    * @returns {Promise <number>}
    * @memberof AnnouncementsService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof AnnouncementsService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<IAnnouncementsModel[]>}
     * @memberof IAnnouncementsService
     */
    findAll(pageNo: number, pageSize: number): Promise<IAnnouncementsModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IAnnouncementsModel[]>}
     * @memberof IAnnouncementsService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IAnnouncementsModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IAnnouncementsModel>}
     * @memberof IAnnouncementsService
     */
    findOne(code: string): Promise<IAnnouncementsModel>;

    /**
     * @param {IAnnouncementsModel} IAnnouncementsModel
     * @returns {Promise<IAnnouncementsModel>}
     * @memberof IAnnouncementsService
     */
    insert(IAnnouncementsModel: IAnnouncementsModel): Promise<IAnnouncementsModel>;

    /**
     * @param {string} id
     * @param {IAnnouncementsModel} IAnnouncementsModel
     * @returns {Promise<IAnnouncementsModel>}
     * @memberof IAnnouncementsService
     */
    update(id: string, IAnnouncementsModel: IAnnouncementsModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IAnnouncementsModel>}
     * @memberof IAnnouncementsService
     */
    remove(id: string): Promise<IAnnouncementsModel>;
}

