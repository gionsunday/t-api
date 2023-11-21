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
 * @example http://localhost:PORT/v1/kycDocuments
 *
 * @swagger
 * /v1/kycDocuments:
 *   get:
 *     description: Get all stored kycDocuments in Database
 *     tags: ["kycDocuments"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of kycDocuments
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/KycdocumentsSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.KycdocumentsComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/kycDocuments/search
 *
 * @swagger
 * /v1/kycDocuments/search:
 *   post:
 *      description: Search kycDocuments
 *      tags: ["kycDocuments"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: kycDocuments search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search kycDocuments
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/KycdocumentsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', components_1.KycdocumentsComponent.search);
/**
 * POST method route
 * @example http://localhost:PORT/v1/kycDocuments
 *
 * @swagger
 * /v1/kycDocuments:
 *   post:
 *      description: Create new kycDocuments
 *      tags: ["kycDocuments"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: kycDocuments creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/KycdocumentsSchema'
 *      responses:
 *        201:
 *          description: return created kycDocuments
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/KycdocumentsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.KycdocumentsComponent.create);
/**
 * POST method route
 * @example http://localhost:PORT/v1/kycDocuments
 *
 * @swagger
 * /v1/kycDocuments/{id}:
 *   post:
 *      description: Update kycDocuments
 *      tags: ["kycDocuments"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: kycDocuments creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/KycdocumentsSchema'
 *      responses:
 *        201:
 *          description: return updated kycDocuments
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/KycdocumentsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', components_1.KycdocumentsComponent.update);
/**
 * GET method route
 * @example http://localhost:PORT/v1/kycDocuments/:id
 *
 * @swagger
 * /v1/kycDocuments/{id}:
 *  get:
 *    description: Get kycDocuments by id
 *    tags: ["kycDocuments"]
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
 *        description: return kycDocuments by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/KycdocumentsSchema'
 */
router.get('/:id', components_1.KycdocumentsComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/kycDocuments/:id
 *
 * @swagger
 * /v1/kycDocuments/{id}:
 *  delete:
 *    description: Delete kycDocuments by id
 *    tags: ["kycDocuments"]
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
 *        description: return deleted kycDocuments
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/KycdocumentsSchema'
 */
router.delete('/:id', components_1.KycdocumentsComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=KycdocumentsRouter.js.map