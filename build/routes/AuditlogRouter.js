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
 * @example http://localhost:PORT/v1/auditLog
 *
 * @swagger
 * /v1/auditLog:
 *   get:
 *     description: Get all stored auditLog in Database
 *     tags: ["auditLog"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of auditLog
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/AuditlogSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.AuditlogComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/auditLog/search
 *
 * @swagger
 * /v1/auditLog/search:
 *   post:
 *      description: Search auditLog
 *      tags: ["auditLog"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: auditLog search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search auditLog
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/AuditlogSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', components_1.AuditlogComponent.search);
/**
 * POST method route
 * @example http://localhost:PORT/v1/auditLog
 *
 * @swagger
 * /v1/auditLog:
 *   post:
 *      description: Create new auditLog
 *      tags: ["auditLog"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: auditLog creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuditlogSchema'
 *      responses:
 *        201:
 *          description: return created auditLog
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/AuditlogSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.AuditlogComponent.create);
/**
 * POST method route
 * @example http://localhost:PORT/v1/auditLog
 *
 * @swagger
 * /v1/auditLog/{id}:
 *   post:
 *      description: Update auditLog
 *      tags: ["auditLog"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: auditLog creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuditlogSchema'
 *      responses:
 *        201:
 *          description: return updated auditLog
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/AuditlogSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', components_1.AuditlogComponent.update);
/**
 * GET method route
 * @example http://localhost:PORT/v1/auditLog/:id
 *
 * @swagger
 * /v1/auditLog/{id}:
 *  get:
 *    description: Get auditLog by id
 *    tags: ["auditLog"]
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
 *        description: return auditLog by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/AuditlogSchema'
 */
router.get('/:id', components_1.AuditlogComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/auditLog/:id
 *
 * @swagger
 * /v1/auditLog/{id}:
 *  delete:
 *    description: Delete auditLog by id
 *    tags: ["auditLog"]
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
 *        description: return deleted auditLog
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/AuditlogSchema'
 */
router.delete('/:id', components_1.AuditlogComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=AuditlogRouter.js.map