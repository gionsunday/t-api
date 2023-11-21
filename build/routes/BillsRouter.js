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
 * @example http://localhost:PORT/v1/bills
 *
 * @swagger
 * /v1/bills:
 *   get:
 *     description: Get all stored bills in Database
 *     tags: ["bills"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of bills
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/BillsSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.BillsComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/bills/search
 *
 * @swagger
 * /v1/bills/search:
 *   post:
 *      description: Search bills
 *      tags: ["bills"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: bills search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search bills
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BillsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', components_1.BillsComponent.search);
/**
 * POST method route
 * @example http://localhost:PORT/v1/bills
 *
 * @swagger
 * /v1/bills:
 *   post:
 *      description: Create new bills
 *      tags: ["bills"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: bills creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BillsSchema'
 *      responses:
 *        201:
 *          description: return created bills
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BillsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.BillsComponent.create);
/**
 * POST method route
 * @example http://localhost:PORT/v1/bills
 *
 * @swagger
 * /v1/bills/{id}:
 *   post:
 *      description: Update bills
 *      tags: ["bills"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: bills creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BillsSchema'
 *      responses:
 *        201:
 *          description: return updated bills
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BillsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', components_1.BillsComponent.update);
/**
 * GET method route
 * @example http://localhost:PORT/v1/bills/:id
 *
 * @swagger
 * /v1/bills/{id}:
 *  get:
 *    description: Get bills by id
 *    tags: ["bills"]
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
 *        description: return bills by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/BillsSchema'
 */
router.get('/:id', components_1.BillsComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/bills/:id
 *
 * @swagger
 * /v1/bills/{id}:
 *  delete:
 *    description: Delete bills by id
 *    tags: ["bills"]
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
 *        description: return deleted bills
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/BillsSchema'
 */
router.delete('/:id', components_1.BillsComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=BillsRouter.js.map