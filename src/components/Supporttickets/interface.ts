import { ISearchParamRequest } from '@/utils/SearchHelper';
import { ISupportticketsModel } from './model';

/**
 * @export
 * @interface ISupportticketsService
 */
export interface ISupportticketsService {
    /**
    * @returns {Promise <number>}
    * @memberof SupportticketsService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof SupportticketsService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<ISupportticketsModel[]>}
     * @memberof ISupportticketsService
     */
    findAll(pageNo: number, pageSize: number): Promise<ISupportticketsModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<ISupportticketsModel[]>}
     * @memberof ISupportticketsService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<ISupportticketsModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<ISupportticketsModel>}
     * @memberof ISupportticketsService
     */
    findOne(code: string): Promise<ISupportticketsModel>;

    /**
     * @param {ISupportticketsModel} ISupportticketsModel
     * @returns {Promise<ISupportticketsModel>}
     * @memberof ISupportticketsService
     */
    insert(ISupportticketsModel: ISupportticketsModel): Promise<ISupportticketsModel>;

    /**
     * @param {string} id
     * @param {ISupportticketsModel} ISupportticketsModel
     * @returns {Promise<ISupportticketsModel>}
     * @memberof ISupportticketsService
     */
    update(id: string, ISupportticketsModel: ISupportticketsModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<ISupportticketsModel>}
     * @memberof ISupportticketsService
     */
    remove(id: string): Promise<ISupportticketsModel>;
}

