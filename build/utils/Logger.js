"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const Logger = winston.createLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple()),
});
exports.default = Logger;
//# sourceMappingURL=Logger.js.map