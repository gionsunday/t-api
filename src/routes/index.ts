import * as express from 'express';
import * as http from 'http';
import * as jwtConfig from '@/config/middleware/jwtAuth';
import * as swaggerUi from 'swagger-ui-express';
import AuthRouter from './AuthRouter';
import swaggerJsdoc = require('swagger-jsdoc');
import FileRouter from './FileRouter';
import fileUpload = require('express-fileupload');
import SupportticketsRouter from './SupportticketsRouter';
import SettingsRouter from './SettingsRouter';
import CompanyinfoRouter from './CompanyinfoRouter';
import AuditlogRouter from './AuditlogRouter';
import KycdocumentsRouter from './KycdocumentsRouter';
import BillsRouter from './BillsRouter';
import BankaccountsRouter from './BankaccountsRouter';
import StatisticsRouter from './StatisticsRouter';
import ExchangeratesRouter from './ExchangeratesRouter';
import TransactionsRouter from './TransactionsRouter';
import RecipientsRouter from './RecipientsRouter';
import UsersRouter from './UsersRouter';
import NotificationRouter from './NotificationRouter';
import AnnouncementsRouter from './AnnouncementsRouter';
import CurrenciesRouter from './CurrenciesRouter';
import BeneficiaryRouter from './BeneficiaryRouter';


type NextFunction = express.NextFunction;
type Request = express.Request;
type Response = express.Response;


/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
    const router: express.Router = express.Router();

    app.use(fileUpload());
    app.use('/v1/supportTickets', jwtConfig.isAuthenticated, SupportticketsRouter);
    app.use('/v1/settings', jwtConfig.isAuthenticated, SettingsRouter);
    app.use('/v1/companyInfo', jwtConfig.isAuthenticated, CompanyinfoRouter);
    app.use('/v1/auditLog', jwtConfig.isAuthenticated, AuditlogRouter);
    app.use('/v1/kycDocuments', jwtConfig.isAuthenticated, KycdocumentsRouter);
    app.use('/v1/bills', jwtConfig.isAuthenticated, BillsRouter);
    app.use('/v1/bankAccounts', jwtConfig.isAuthenticated, BankaccountsRouter);
    app.use('/v1/statistics', jwtConfig.isAuthenticated, StatisticsRouter);
    app.use('/v1/exchangeRates', jwtConfig.isAuthenticated, ExchangeratesRouter);
    app.use('/v1/transactions', jwtConfig.isAuthenticated, TransactionsRouter);
    app.use('/v1/recipients', jwtConfig.isAuthenticated, RecipientsRouter);
    app.use('/v1/users', jwtConfig.isAuthenticated, UsersRouter);
    app.use('/v1/notification', jwtConfig.isAuthenticated, NotificationRouter);
    app.use('/v1/announcements', jwtConfig.isAuthenticated, AnnouncementsRouter);
    app.use('/v1/currencies', jwtConfig.isAuthenticated, CurrenciesRouter);
    app.use('/v1/beneficiary', jwtConfig.isAuthenticated, BeneficiaryRouter);


    app.use('/v1/file', jwtConfig.isAuthenticated, FileRouter);
    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    app.use('/auth', AuthRouter);

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
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs, { explorer: true })
    );

    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });

    /**
     * @constructs all routes
     */
    app.use(router);
}

