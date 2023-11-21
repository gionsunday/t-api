"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const NODE_ENV = process.env.NODE_ENV || 'development';
const development = {
    port: process.env.PORT || 8484,
    database: {
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/',
        MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'example_db',
    },
    secret: process.env.SECRET || 'secret',
    TOKEN_EXPIRE_TIME_MSEC: parseInt(process.env.TOKEN_EXPIRE_TIME_MSEC) || 48000
};
const production = {
    port: process.env.PORT || 8484,
    database: {
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://production_uri/',
        MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'example_db',
    },
    secret: process.env.SECRET || 'secret',
    TOKEN_EXPIRE_TIME_MSEC: parseInt(process.env.TOKEN_EXPIRE_TIME_MSEC) || 48000
};
const test = {
    port: process.env.PORT || 8484,
    database: {
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017',
        MONGODB_DB_MAIN: `${(process.env.MONGODB_DB_MAIN || 'example_db')}_test`,
    },
    secret: process.env.SECRET || 'secret',
    TOKEN_EXPIRE_TIME_MSEC: parseInt(process.env.TOKEN_EXPIRE_TIME_MSEC) || 48000
};
const config = {
    test,
    development,
    production,
};
exports.default = config[NODE_ENV];
//# sourceMappingURL=index.js.map