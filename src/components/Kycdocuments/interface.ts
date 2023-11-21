import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IKycdocumentsModel } from './model';

/**
 * @export
 * @interface IKycdocumentsService
 */
export interface IKycdocumentsService {
    /**
    * @returns {Promise <number>}
    * @memberof KycdocumentsService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof KycdocumentsService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<IKycdocumentsModel[]>}
     * @memberof IKycdocumentsService
     */
    findAll(pageNo: number, pageSize: number): Promise<IKycdocumentsModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IKycdocumentsModel[]>}
     * @memberof IKycdocumentsService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IKycdocumentsModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IKycdocumentsModel>}
     * @memberof IKycdocumentsService
     */
    findOne(code: string): Promise<IKycdocumentsModel>;

    /**
     * @param {IKycdocumentsModel} IKycdocumentsModel
     * @returns {Promise<IKycdocumentsModel>}
     * @memberof IKycdocumentsService
     */
    insert(IKycdocumentsModel: IKycdocumentsModel): Promise<IKycdocumentsModel>;

    /**
     * @param {string} id
     * @param {IKycdocumentsModel} IKycdocumentsModel
     * @returns {Promise<IKycdocumentsModel>}
     * @memberof IKycdocumentsService
     */
    update(id: string, IKycdocumentsModel: IKycdocumentsModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IKycdocumentsModel>}
     * @memberof IKycdocumentsService
     */
    remove(id: string): Promise<IKycdocumentsModel>;
}

