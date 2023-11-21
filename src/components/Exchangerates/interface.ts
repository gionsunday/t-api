import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IExchangeratesModel } from './model';

/**
 * @export
 * @interface IExchangeratesService
 */
export interface IExchangeratesService {
    /**
    * @returns {Promise <number>}
    * @memberof ExchangeratesService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof ExchangeratesService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<IExchangeratesModel[]>}
     * @memberof IExchangeratesService
     */
    findAll(pageNo: number, pageSize: number): Promise<IExchangeratesModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IExchangeratesModel[]>}
     * @memberof IExchangeratesService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IExchangeratesModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IExchangeratesModel>}
     * @memberof IExchangeratesService
     */
    findOne(code: string): Promise<IExchangeratesModel>;

    /**
     * @param {IExchangeratesModel} IExchangeratesModel
     * @returns {Promise<IExchangeratesModel>}
     * @memberof IExchangeratesService
     */
    insert(IExchangeratesModel: IExchangeratesModel): Promise<IExchangeratesModel>;

    /**
     * @param {string} id
     * @param {IExchangeratesModel} IExchangeratesModel
     * @returns {Promise<IExchangeratesModel>}
     * @memberof IExchangeratesService
     */
    update(id: string, IExchangeratesModel: IExchangeratesModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IExchangeratesModel>}
     * @memberof IExchangeratesService
     */
    remove(id: string): Promise<IExchangeratesModel>;
}

