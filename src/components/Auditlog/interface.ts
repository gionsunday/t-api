import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IAuditlogModel } from './model';

/**
 * @export
 * @interface IAuditlogService
 */
export interface IAuditlogService {
    /**
    * @returns {Promise <number>}
    * @memberof AuditlogService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof AuditlogService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<IAuditlogModel[]>}
     * @memberof IAuditlogService
     */
    findAll(pageNo: number, pageSize: number): Promise<IAuditlogModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IAuditlogModel[]>}
     * @memberof IAuditlogService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IAuditlogModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IAuditlogModel>}
     * @memberof IAuditlogService
     */
    findOne(code: string): Promise<IAuditlogModel>;

    /**
     * @param {IAuditlogModel} IAuditlogModel
     * @returns {Promise<IAuditlogModel>}
     * @memberof IAuditlogService
     */
    insert(IAuditlogModel: IAuditlogModel): Promise<IAuditlogModel>;

    /**
     * @param {string} id
     * @param {IAuditlogModel} IAuditlogModel
     * @returns {Promise<IAuditlogModel>}
     * @memberof IAuditlogService
     */
    update(id: string, IAuditlogModel: IAuditlogModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IAuditlogModel>}
     * @memberof IAuditlogService
     */
    remove(id: string): Promise<IAuditlogModel>;
}

