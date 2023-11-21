import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IStatisticsModel } from './model';

/**
 * @export
 * @interface IStatisticsService
 */
export interface IStatisticsService {
    /**
    * @returns {Promise <number>}
    * @memberof StatisticsService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof StatisticsService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<IStatisticsModel[]>}
     * @memberof IStatisticsService
     */
    findAll(pageNo: number, pageSize: number): Promise<IStatisticsModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IStatisticsModel[]>}
     * @memberof IStatisticsService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IStatisticsModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IStatisticsModel>}
     * @memberof IStatisticsService
     */
    findOne(code: string): Promise<IStatisticsModel>;

    /**
     * @param {IStatisticsModel} IStatisticsModel
     * @returns {Promise<IStatisticsModel>}
     * @memberof IStatisticsService
     */
    insert(IStatisticsModel: IStatisticsModel): Promise<IStatisticsModel>;

    /**
     * @param {string} id
     * @param {IStatisticsModel} IStatisticsModel
     * @returns {Promise<IStatisticsModel>}
     * @memberof IStatisticsService
     */
    update(id: string, IStatisticsModel: IStatisticsModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IStatisticsModel>}
     * @memberof IStatisticsService
     */
    remove(id: string): Promise<IStatisticsModel>;
}

