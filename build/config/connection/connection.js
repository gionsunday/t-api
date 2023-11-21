"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose = require("mongoose");
const index_1 = require("@/config/env/index");
const Logger_1 = require("@/utils/Logger");
const connectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};
const MONGO_URI = `${index_1.default.database.MONGODB_URI}`;
exports.db = mongoose.createConnection(MONGO_URI, connectOptions);
// handlers
exports.db.on('connecting', () => {
    Logger_1.default.info('[MongoDB] connecting');
});
exports.db.on('error', (error) => {
    Logger_1.default.error(`[MongoDB] connection ${error}`);
    mongoose.disconnect();
});
exports.db.on('connected', () => {
    Logger_1.default.info('[MongoDB] connected');
});
exports.db.once('open', () => {
    Logger_1.default.info('[MongoDB] connection opened');
});
exports.db.on('reconnected', () => {
    Logger_1.default.warn('[MongoDB] reconnected');
});
exports.db.on('reconnectFailed', () => {
    Logger_1.default.error('[MongoDB] reconnectFailed');
});
exports.db.on('disconnected', () => {
    Logger_1.default.warn('[MongoDB] disconnected');
});
exports.db.on('fullsetup', () => {
    Logger_1.default.debug('[MongoDB] reconnecting... %d');
});
//# sourceMappingURL=connection.js.map