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
 * @example http://localhost:PORT/v1/recipients
 *
 * @swagger
 * /v1/recipients:
 *   get:
 *     description: Get all stored recipients in Database
 *     tags: ["recipients"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of recipients
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/RecipientsSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.RecipientsComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/recipients/search
 *
 * @swagger
 * /v1/recipients/search:
 *   post:
 *      description: Search recipients
 *      tags: ["recipients"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: recipients search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search recipients
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/RecipientsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', components_1.RecipientsComponent.search);
/**
 * POST method route
 * @example http://localhost:PORT/v1/recipients
 *
 * @swagger
 * /v1/recipients:
 *   post:
 *      description: Create new recipients
 *      tags: ["recipients"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: recipients creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RecipientsSchema'
 *      responses:
 *        201:
 *          description: return created recipients
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/RecipientsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.RecipientsComponent.create);
/**
 * POST method route
 * @example http://localhost:PORT/v1/recipients
 *
 * @swagger
 * /v1/recipients/{id}:
 *   post:
 *      description: Update recipients
 *      tags: ["recipients"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: recipients creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RecipientsSchema'
 *      responses:
 *        201:
 *          description: return updated recipients
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/RecipientsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', components_1.RecipientsComponent.update);
/**
 * GET method route
 * @example http://localhost:PORT/v1/recipients/:id
 *
 * @swagger
 * /v1/recipients/{id}:
 *  get:
 *    description: Get recipients by id
 *    tags: ["recipients"]
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
 *        description: return recipients by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/RecipientsSchema'
 */
router.get('/:id', components_1.RecipientsComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/recipients/:id
 *
 * @swagger
 * /v1/recipients/{id}:
 *  delete:
 *    description: Delete recipients by id
 *    tags: ["recipients"]
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
 *        description: return deleted recipients
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/RecipientsSchema'
 */
router.delete('/:id', components_1.RecipientsComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=RecipientsRouter.js.map