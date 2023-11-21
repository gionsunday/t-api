"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const express = require("express");
const http = require("http");
const jwtConfig = require("@/config/middleware/jwtAuth");
const swaggerUi = require("swagger-ui-express");
const AuthRouter_1 = require("./AuthRouter");
const swaggerJsdoc = require("swagger-jsdoc");
const FileRouter_1 = require("./FileRouter");
const fileUpload = require("express-fileupload");
const SupportticketsRouter_1 = require("./SupportticketsRouter");
const SettingsRouter_1 = require("./SettingsRouter");
const CompanyinfoRouter_1 = require("./CompanyinfoRouter");
const AuditlogRouter_1 = require("./AuditlogRouter");
const KycdocumentsRouter_1 = require("./KycdocumentsRouter");
const BillsRouter_1 = require("./BillsRouter");
const BankaccountsRouter_1 = require("./BankaccountsRouter");
const StatisticsRouter_1 = require("./StatisticsRouter");
const ExchangeratesRouter_1 = require("./ExchangeratesRouter");
const TransactionsRouter_1 = require("./TransactionsRouter");
const RecipientsRouter_1 = require("./RecipientsRouter");
const UsersRouter_1 = require("./UsersRouter");
const NotificationRouter_1 = require("./NotificationRouter");
const AnnouncementsRouter_1 = require("./AnnouncementsRouter");
const CurrenciesRouter_1 = require("./CurrenciesRouter");
const BeneficiaryRouter_1 = require("./BeneficiaryRouter");
/**
 * @export
 * @param {express.Application} app
 */
function init(app) {
    const router = express.Router();
    app.use(fileUpload());
    app.use('/v1/supportTickets', jwtConfig.isAuthenticated, SupportticketsRouter_1.default);
    app.use('/v1/settings', jwtConfig.isAuthenticated, SettingsRouter_1.default);
    app.use('/v1/companyInfo', jwtConfig.isAuthenticated, CompanyinfoRouter_1.default);
    app.use('/v1/auditLog', jwtConfig.isAuthenticated, AuditlogRouter_1.default);
    app.use('/v1/kycDocuments', jwtConfig.isAuthenticated, KycdocumentsRouter_1.default);
    app.use('/v1/bills', jwtConfig.isAuthenticated, BillsRouter_1.default);
    app.use('/v1/bankAccounts', jwtConfig.isAuthenticated, BankaccountsRouter_1.default);
    app.use('/v1/statistics', jwtConfig.isAuthenticated, StatisticsRouter_1.default);
    app.use('/v1/exchangeRates', jwtConfig.isAuthenticated, ExchangeratesRouter_1.default);
    app.use('/v1/transactions', jwtConfig.isAuthenticated, TransactionsRouter_1.default);
    app.use('/v1/recipients', jwtConfig.isAuthenticated, RecipientsRouter_1.default);
    app.use('/v1/users', jwtConfig.isAuthenticated, UsersRouter_1.default);
    app.use('/v1/notification', jwtConfig.isAuthenticated, NotificationRouter_1.default);
    app.use('/v1/announcements', jwtConfig.isAuthenticated, AnnouncementsRouter_1.default);
    app.use('/v1/currencies', jwtConfig.isAuthenticated, CurrenciesRouter_1.default);
    app.use('/v1/beneficiary', jwtConfig.isAuthenticated, BeneficiaryRouter_1.default);
    app.use('/v1/file', jwtConfig.isAuthenticated, FileRouter_1.default);
    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    app.use('/auth', AuthRouter_1.default);
    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "TransactFinAPI API",
                version: "1.0.0",
                description: "TypeScript, Express, JWT Auth, Mongoose, TransactFin.com",
                license: {
                    name: "TransactFin",
                    url: "https://transactfin.com",
                }
            },
            servers: [
                {
                    url: "http://localhost:8484",
                },
            ],
        },
        apis: ['./**/*.ts'],
    };
    const specs = swaggerJsdoc(options);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req, res, next) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });
    /**
     * @constructs all routes
     */
    app.use(router);
}
exports.init = init;
//# sourceMappingURL=index.js.map