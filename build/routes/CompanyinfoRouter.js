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
 * @example http://localhost:PORT/v1/companyInfo
 *
 * @swagger
 * /v1/companyInfo:
 *   get:
 *     description: Get all stored companyInfo in Database
 *     tags: ["companyInfo"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of companyInfo
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/CompanyinfoSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.CompanyinfoComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/companyInfo/search
 *
 * @swagger
 * /v1/companyInfo/search:
 *   post:
 *      description: Search companyInfo
 *      tags: ["companyInfo"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: companyInfo search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search companyInfo
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CompanyinfoSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', components_1.CompanyinfoComponent.search);
/**
 * POST method route
 * @example http://localhost:PORT/v1/companyInfo
 *
 * @swagger
 * /v1/companyInfo:
 *   post:
 *      description: Create new companyInfo
 *      tags: ["companyInfo"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: companyInfo creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CompanyinfoSchema'
 *      responses:
 *        201:
 *          description: return created companyInfo
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CompanyinfoSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.CompanyinfoComponent.create);
/**
 * POST method route
 * @example http://localhost:PORT/v1/companyInfo
 *
 * @swagger
 * /v1/companyInfo/{id}:
 *   post:
 *      description: Update companyInfo
 *      tags: ["companyInfo"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: companyInfo creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CompanyinfoSchema'
 *      responses:
 *        201:
 *          description: return updated companyInfo
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CompanyinfoSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', components_1.CompanyinfoComponent.update);
/**
 * GET method route
 * @example http://localhost:PORT/v1/companyInfo/:id
 *
 * @swagger
 * /v1/companyInfo/{id}:
 *  get:
 *    description: Get companyInfo by id
 *    tags: ["companyInfo"]
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
 *        description: return companyInfo by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CompanyinfoSchema'
 */
router.get('/:id', components_1.CompanyinfoComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/companyInfo/:id
 *
 * @swagger
 * /v1/companyInfo/{id}:
 *  delete:
 *    description: Delete companyInfo by id
 *    tags: ["companyInfo"]
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
 *        description: return deleted companyInfo
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CompanyinfoSchema'
 */
router.delete('/:id', components_1.CompanyinfoComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=CompanyinfoRouter.js.map