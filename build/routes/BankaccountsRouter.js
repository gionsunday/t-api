"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const components_1 = require("@/components");
/**
 * @constant {express.Router}
 */
const router = express_1.Router();
/**
 * GET method route
 * @example http://localhost:PORT/v1/bankAccounts
 *
 * @swagger
 * /v1/bankAccounts:
 *   get:
 *     description: Get all stored bankAccounts in Database
 *     tags: ["bankAccounts"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of bankAccounts
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/BankaccountsSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.BankaccountsComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/bankAccounts/search
 *
 * @swagger
 * /v1/bankAccounts/search:
 *   post:
 *      description: Search bankAccounts
 *      tags: ["bankAccounts"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: bankAccounts search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search bankAccounts
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BankaccountsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', components_1.BankaccountsComponent.search);
/**
 * POST method route
 * @example http://localhost:PORT/v1/bankAccounts
 *
 * @swagger
 * /v1/bankAccounts:
 *   post:
 *      description: Create new bankAccounts
 *      tags: ["bankAccounts"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: bankAccounts creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BankaccountsSchema'
 *      responses:
 *        201:
 *          description: return created bankAccounts
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BankaccountsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.BankaccountsComponent.create);
/**
 * POST method route
 * @example http://localhost:PORT/v1/bankAccounts
 *
 * @swagger
 * /v1/bankAccounts/{id}:
 *   post:
 *      description: Update bankAccounts
 *      tags: ["bankAccounts"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: bankAccounts creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BankaccountsSchema'
 *      responses:
 *        201:
 *          description: return updated bankAccounts
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BankaccountsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', components_1.BankaccountsComponent.update);
/**
 * GET method route
 * @example http://localhost:PORT/v1/bankAccounts/:id
 *
 * @swagger
 * /v1/bankAccounts/{id}:
 *  get:
 *    description: Get bankAccounts by id
 *    tags: ["bankAccounts"]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return bankAccounts by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/BankaccountsSchema'
 */
router.get('/:id', components_1.BankaccountsComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/bankAccounts/:id
 *
 * @swagger
 * /v1/bankAccounts/{id}:
 *  delete:
 *    description: Delete bankAccounts by id
 *    tags: ["bankAccounts"]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted bankAccounts
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/BankaccountsSchema'
 */
router.delete('/:id', components_1.BankaccountsComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=BankaccountsRouter.js.map