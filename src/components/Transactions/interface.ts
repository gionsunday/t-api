import { ISearchParamRequest } from '@/utils/SearchHelper';
import { ITransactionsModel } from './model';

/**
 * @export
 * @interface ITransactionsService
 */
export interface ITransactionsService {
    /**
    * @returns {Promise <number>}
    * @memberof TransactionsService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof TransactionsService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<ITransactionsModel[]>}
     * @memberof ITransactionsService
     */
    findAll(pageNo: number, pageSize: number): Promise<ITransactionsModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<ITransactionsModel[]>}
     * @memberof ITransactionsService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<ITransactionsModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<ITransactionsModel>}
     * @memberof ITransactionsService
     */
    findOne(code: string): Promise<ITransactionsModel>;

    /**
     * @param {ITransactionsModel} ITransactionsModel
     * @returns {Promise<ITransactionsModel>}
     * @memberof ITransactionsService
     */
    insert(ITransactionsModel: ITransactionsModel): Promise<ITransactionsModel>;

    /**
     * @param {string} id
     * @param {ITransactionsModel} ITransactionsModel
     * @returns {Promise<ITransactionsModel>}
     * @memberof ITransactionsService
     */
    update(id: string, ITransactionsModel: ITransactionsModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<ITransactionsModel>}
     * @memberof ITransactionsService
     */
    remove(id: string): Promise<ITransactionsModel>;
}

