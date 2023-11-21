import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IUsersModel } from './model';

/**
 * @export
 * @interface IUsersService
 */
export interface IUsersService {
    /**
    * @returns {Promise <number>}
    * @memberof UsersService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof UsersService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<IUsersModel[]>}
     * @memberof IUsersService
     */
    findAll(pageNo: number, pageSize: number): Promise<IUsersModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IUsersModel[]>}
     * @memberof IUsersService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IUsersModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IUsersModel>}
     * @memberof IUsersService
     */
    findOne(code: string): Promise<IUsersModel>;

    /**
     * @param {IUsersModel} IUsersModel
     * @returns {Promise<IUsersModel>}
     * @memberof IUsersService
     */
    insert(IUsersModel: IUsersModel): Promise<IUsersModel>;

    /**
     * @param {string} id
     * @param {IUsersModel} IUsersModel
     * @returns {Promise<IUsersModel>}
     * @memberof IUsersService
     */
    update(id: string, IUsersModel: IUsersModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IUsersModel>}
     * @memberof IUsersService
     */
    remove(id: string): Promise<IUsersModel>;
}

