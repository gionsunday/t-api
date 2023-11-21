import { ISearchParamRequest } from '@/utils/SearchHelper';
import { ICompanyinfoModel } from './model';

/**
 * @export
 * @interface ICompanyinfoService
 */
export interface ICompanyinfoService {
    /**
    * @returns {Promise <number>}
    * @memberof CompanyinfoService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof CompanyinfoService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<ICompanyinfoModel[]>}
     * @memberof ICompanyinfoService
     */
    findAll(pageNo: number, pageSize: number): Promise<ICompanyinfoModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<ICompanyinfoModel[]>}
     * @memberof ICompanyinfoService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<ICompanyinfoModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<ICompanyinfoModel>}
     * @memberof ICompanyinfoService
     */
    findOne(code: string): Promise<ICompanyinfoModel>;

    /**
     * @param {ICompanyinfoModel} ICompanyinfoModel
     * @returns {Promise<ICompanyinfoModel>}
     * @memberof ICompanyinfoService
     */
    insert(ICompanyinfoModel: ICompanyinfoModel): Promise<ICompanyinfoModel>;

    /**
     * @param {string} id
     * @param {ICompanyinfoModel} ICompanyinfoModel
     * @returns {Promise<ICompanyinfoModel>}
     * @memberof ICompanyinfoService
     */
    update(id: string, ICompanyinfoModel: ICompanyinfoModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<ICompanyinfoModel>}
     * @memberof ICompanyinfoService
     */
    remove(id: string): Promise<ICompanyinfoModel>;
}

