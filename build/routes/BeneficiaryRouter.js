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
 * @example http://localhost:PORT/v1/beneficiary
 *
 * @swagger
 * /v1/beneficiary:
 *   get:
 *     description: Get all stored beneficiary in Database
 *     tags: ["beneficiary"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of beneficiary
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/BeneficiarySchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.BeneficiaryComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/beneficiary/search
 *
 * @swagger
 * /v1/beneficiary/search:
 *   post:
 *      description: Search beneficiary
 *      tags: ["beneficiary"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: beneficiary search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search beneficiary
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BeneficiarySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', components_1.BeneficiaryComponent.search);
/**
 * POST method route
 * @example http://localhost:PORT/v1/beneficiary
 *
 * @swagger
 * /v1/beneficiary:
 *   post:
 *      description: Create new beneficiary
 *      tags: ["beneficiary"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: beneficiary creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BeneficiarySchema'
 *      responses:
 *        201:
 *          description: return created beneficiary
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BeneficiarySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.BeneficiaryComponent.create);
/**
 * POST method route
 * @example http://localhost:PORT/v1/beneficiary
 *
 * @swagger
 * /v1/beneficiary/{id}:
 *   post:
 *      description: Update beneficiary
 *      tags: ["beneficiary"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: beneficiary creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BeneficiarySchema'
 *      responses:
 *        201:
 *          description: return updated beneficiary
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BeneficiarySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', components_1.BeneficiaryComponent.update);
/**
 * GET method route
 * @example http://localhost:PORT/v1/beneficiary/:id
 *
 * @swagger
 * /v1/beneficiary/{id}:
 *  get:
 *    description: Get beneficiary by id
 *    tags: ["beneficiary"]
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
 *        description: return beneficiary by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/BeneficiarySchema'
 */
router.get('/:id', components_1.BeneficiaryComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/beneficiary/:id
 *
 * @swagger
 * /v1/beneficiary/{id}:
 *  delete:
 *    description: Delete beneficiary by id
 *    tags: ["beneficiary"]
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
 *        description: return deleted beneficiary
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/BeneficiarySchema'
 */
router.delete('/:id', components_1.BeneficiaryComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=BeneficiaryRouter.js.map