import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IBillsModel } from './model';

/**
 * @export
 * @interface IBillsService
 */
export interface IBillsService {
    /**
    * @returns {Promise <number>}
    * @memberof BillsService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof BillsService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<IBillsModel[]>}
     * @memberof IBillsService
     */
    findAll(pageNo: number, pageSize: number): Promise<IBillsModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IBillsModel[]>}
     * @memberof IBillsService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IBillsModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IBillsModel>}
     * @memberof IBillsService
     */
    findOne(code: string): Promise<IBillsModel>;

    /**
     * @param {IBillsModel} IBillsModel
     * @returns {Promise<IBillsModel>}
     * @memberof IBillsService
     */
    insert(IBillsModel: IBillsModel): Promise<IBillsModel>;

    /**
     * @param {string} id
     * @param {IBillsModel} IBillsModel
     * @returns {Promise<IBillsModel>}
     * @memberof IBillsService
     */
    update(id: string, IBillsModel: IBillsModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IBillsModel>}
     * @memberof IBillsService
     */
    remove(id: string): Promise<IBillsModel>;
}

