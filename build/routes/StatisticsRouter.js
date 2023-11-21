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
 * @example http://localhost:PORT/v1/statistics
 *
 * @swagger
 * /v1/statistics:
 *   get:
 *     description: Get all stored statistics in Database
 *     tags: ["statistics"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of statistics
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/StatisticsSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.StatisticsComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/statistics/search
 *
 * @swagger
 * /v1/statistics/search:
 *   post:
 *      description: Search statistics
 *      tags: ["statistics"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: statistics search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search statistics
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/StatisticsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', components_1.StatisticsComponent.search);
/**
 * POST method route
 * @example http://localhost:PORT/v1/statistics
 *
 * @swagger
 * /v1/statistics:
 *   post:
 *      description: Create new statistics
 *      tags: ["statistics"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: statistics creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/StatisticsSchema'
 *      responses:
 *        201:
 *          description: return created statistics
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/StatisticsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.StatisticsComponent.create);
/**
 * POST method route
 * @example http://localhost:PORT/v1/statistics
 *
 * @swagger
 * /v1/statistics/{id}:
 *   post:
 *      description: Update statistics
 *      tags: ["statistics"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: statistics creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/StatisticsSchema'
 *      responses:
 *        201:
 *          description: return updated statistics
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/StatisticsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', components_1.StatisticsComponent.update);
/**
 * GET method route
 * @example http://localhost:PORT/v1/statistics/:id
 *
 * @swagger
 * /v1/statistics/{id}:
 *  get:
 *    description: Get statistics by id
 *    tags: ["statistics"]
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
 *        description: return statistics by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/StatisticsSchema'
 */
router.get('/:id', components_1.StatisticsComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/statistics/:id
 *
 * @swagger
 * /v1/statistics/{id}:
 *  delete:
 *    description: Delete statistics by id
 *    tags: ["statistics"]
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
 *        description: return deleted statistics
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/StatisticsSchema'
 */
router.delete('/:id', components_1.StatisticsComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=StatisticsRouter.js.map