import { ISearchParamRequest } from '@/utils/SearchHelper';
import { ISettingsModel } from './model';

/**
 * @export
 * @interface ISettingsService
 */
export interface ISettingsService {
    /**
    * @returns {Promise <number>}
    * @memberof SettingsService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof SettingsService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<ISettingsModel[]>}
     * @memberof ISettingsService
     */
    findAll(pageNo: number, pageSize: number): Promise<ISettingsModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<ISettingsModel[]>}
     * @memberof ISettingsService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<ISettingsModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<ISettingsModel>}
     * @memberof ISettingsService
     */
    findOne(code: string): Promise<ISettingsModel>;

    /**
     * @param {ISettingsModel} ISettingsModel
     * @returns {Promise<ISettingsModel>}
     * @memberof ISettingsService
     */
    insert(ISettingsModel: ISettingsModel): Promise<ISettingsModel>;

    /**
     * @param {string} id
     * @param {ISettingsModel} ISettingsModel
     * @returns {Promise<ISettingsModel>}
     * @memberof ISettingsService
     */
    update(id: string, ISettingsModel: ISettingsModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<ISettingsModel>}
     * @memberof ISettingsService
     */
    remove(id: string): Promise<ISettingsModel>;
}

