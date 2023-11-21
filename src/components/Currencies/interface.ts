import { ISearchParamRequest } from '@/utils/SearchHelper';
import { ICurrenciesModel } from './model';

/**
 * @export
 * @interface ICurrenciesService
 */
export interface ICurrenciesService {
    /**
    * @returns {Promise <number>}
    * @memberof CurrenciesService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof CurrenciesService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<ICurrenciesModel[]>}
     * @memberof ICurrenciesService
     */
    findAll(pageNo: number, pageSize: number): Promise<ICurrenciesModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<ICurrenciesModel[]>}
     * @memberof ICurrenciesService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<ICurrenciesModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<ICurrenciesModel>}
     * @memberof ICurrenciesService
     */
    findOne(code: string): Promise<ICurrenciesModel>;

    /**
     * @param {ICurrenciesModel} ICurrenciesModel
     * @returns {Promise<ICurrenciesModel>}
     * @memberof ICurrenciesService
     */
    insert(ICurrenciesModel: ICurrenciesModel): Promise<ICurrenciesModel>;

    /**
     * @param {string} id
     * @param {ICurrenciesModel} ICurrenciesModel
     * @returns {Promise<ICurrenciesModel>}
     * @memberof ICurrenciesService
     */
    update(id: string, ICurrenciesModel: ICurrenciesModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<ICurrenciesModel>}
     * @memberof ICurrenciesService
     */
    remove(id: string): Promise<ICurrenciesModel>;
}

