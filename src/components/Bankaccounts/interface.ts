import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IBankaccountsModel } from './model';

/**
 * @export
 * @interface IBankaccountsService
 */
export interface IBankaccountsService {
    /**
    * @returns {Promise <number>}
    * @memberof BankaccountsService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof BankaccountsService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<IBankaccountsModel[]>}
     * @memberof IBankaccountsService
     */
    findAll(pageNo: number, pageSize: number): Promise<IBankaccountsModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IBankaccountsModel[]>}
     * @memberof IBankaccountsService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IBankaccountsModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IBankaccountsModel>}
     * @memberof IBankaccountsService
     */
    findOne(code: string): Promise<IBankaccountsModel>;

    /**
     * @param {IBankaccountsModel} IBankaccountsModel
     * @returns {Promise<IBankaccountsModel>}
     * @memberof IBankaccountsService
     */
    insert(IBankaccountsModel: IBankaccountsModel): Promise<IBankaccountsModel>;

    /**
     * @param {string} id
     * @param {IBankaccountsModel} IBankaccountsModel
     * @returns {Promise<IBankaccountsModel>}
     * @memberof IBankaccountsService
     */
    update(id: string, IBankaccountsModel: IBankaccountsModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IBankaccountsModel>}
     * @memberof IBankaccountsService
     */
    remove(id: string): Promise<IBankaccountsModel>;
}

