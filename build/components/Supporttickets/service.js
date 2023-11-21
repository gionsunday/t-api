"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const validation_1 = require("./validation");
const mongoose_1 = require("mongoose");
const SearchHelper_1 = require("@/utils/SearchHelper");
/**
 * @export
 * @implements {ISupportticketsModelService}
 */
const SupportticketsService = {
    /**
    * @returns {Promise <number>}
    * @memberof SupportticketsService
    */
    countAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.countDocuments({});
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @returns {Promise <number>}
     * @memberof ProductsService
     */
    countSearch(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = SearchHelper_1.GetSearchQuery(body);
                return yield model_1.default.countDocuments(query);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @returns {Promise < ISupportticketsModel[] >}
     * @memberof SupportticketsService
     */
    findAll(pageNo, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const skip = pageNo * pageSize;
                return yield model_1.default.find({}).skip(skip).limit(pageSize);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <ISupportticketsModel[]>}
    * @memberof SupportticketsService
    */
    search(body, pageNo, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.searchParams(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const skip = pageNo * pageSize;
                const query = SearchHelper_1.GetSearchQuery(body);
                return yield model_1.default.find(query).skip(skip).limit(pageSize);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < ISupportticketsModel >}
     * @memberof SupportticketsService
     */
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.getSupporttickets({
                    id,
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                return yield model_1.default.findOne({
                    _id: mongoose_1.Types.ObjectId(id),
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {ISupportticketsModel} supportTickets
     * @returns {Promise < ISupportticketsModel >}
     * @memberof SupportticketsService
     */
    insert(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.createSupporttickets(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const supportTickets = yield model_1.default.create(body);
                return supportTickets;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @param {ISupportticketsModel} supportTickets
     * @returns {Promise < ISupportticketsModel >}
     * @memberof SupportticketsService
     */
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.updateSupporttickets(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const supportTickets = yield model_1.default.updateOne({ _id: mongoose_1.Types.ObjectId(id) }, { $set: body });
                return supportTickets.nModified;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < ISupportticketsModel >}
     * @memberof SupportticketsService
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.removeSupporttickets({
                    id,
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const supportTickets = yield model_1.default.findOneAndRemove({
                    _id: mongoose_1.Types.ObjectId(id),
                });
                return supportTickets;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
};
exports.default = SupportticketsService;
//# sourceMappingURL=service.js.map