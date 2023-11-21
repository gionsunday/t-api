"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynmObj = exports.GetSearchQuery = void 0;
function GetSearchQuery(body) {
    const orAnd = body.orAnd.toLowerCase();
    const params = [];
    let query = {};
    body.params.forEach((item) => {
        const k = dynmObj(item.columnName.toString(), item.columnValue);
        params.push(k);
    });
    if (orAnd === 'or') {
        query = { $or: params };
    }
    else {
        query = { $and: params };
    }
    return query;
}
exports.GetSearchQuery = GetSearchQuery;
function dynmObj(a, b) {
    var json = {
        [a]: { '$regex': b, '$options': 'i' }
    };
    return json;
}
exports.dynmObj = dynmObj;
//# sourceMappingURL=SearchHelper.js.map