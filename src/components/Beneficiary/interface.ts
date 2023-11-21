import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IBeneficiaryModel } from './model';

/**
 * @export
 * @interface IBeneficiaryService
 */
export interface IBeneficiaryService {
    /**
    * @returns {Promise <number>}
    * @memberof BeneficiaryService
    */
    countAll(): Promise<number>;

    /**
    * @returns {Promise <number>}
    * @memberof BeneficiaryService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<IBeneficiaryModel[]>}
     * @memberof IBeneficiaryService
     */
    findAll(pageNo: number, pageSize: number): Promise<IBeneficiaryModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IBeneficiaryModel[]>}
     * @memberof IBeneficiaryService
     */
    search(searchParam: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IBeneficiaryModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IBeneficiaryModel>}
     * @memberof IBeneficiaryService
     */
    findOne(code: string): Promise<IBeneficiaryModel>;

    /**
     * @param {IBeneficiaryModel} IBeneficiaryModel
     * @returns {Promise<IBeneficiaryModel>}
     * @memberof IBeneficiaryService
     */
    insert(IBeneficiaryModel: IBeneficiaryModel): Promise<IBeneficiaryModel>;

    /**
     * @param {string} id
     * @param {IBeneficiaryModel} IBeneficiaryModel
     * @returns {Promise<IBeneficiaryModel>}
     * @memberof IBeneficiaryService
     */
    update(id: string, IBeneficiaryModel: IBeneficiaryModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IBeneficiaryModel>}
     * @memberof IBeneficiaryService
     */
    remove(id: string): Promise<IBeneficiaryModel>;
}

