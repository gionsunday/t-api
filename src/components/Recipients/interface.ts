import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IRecipientsModel } from './model';

/**
 * @export
 * @interface IRecipientsService
 */
export interface IRecipientsService {
    /**
    * @returns {Promise <number>}
    * @memberof RecipientsService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof RecipientsService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<IRecipientsModel[]>}
     * @memberof IRecipientsService
     */
    findAll(pageNo: number, pageSize: number): Promise<IRecipientsModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IRecipientsModel[]>}
     * @memberof IRecipientsService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IRecipientsModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IRecipientsModel>}
     * @memberof IRecipientsService
     */
    findOne(code: string): Promise<IRecipientsModel>;

    /**
     * @param {IRecipientsModel} IRecipientsModel
     * @returns {Promise<IRecipientsModel>}
     * @memberof IRecipientsService
     */
    insert(IRecipientsModel: IRecipientsModel): Promise<IRecipientsModel>;

    /**
     * @param {string} id
     * @param {IRecipientsModel} IRecipientsModel
     * @returns {Promise<IRecipientsModel>}
     * @memberof IRecipientsService
     */
    update(id: string, IRecipientsModel: IRecipientsModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IRecipientsModel>}
     * @memberof IRecipientsService
     */
    remove(id: string): Promise<IRecipientsModel>;
}

