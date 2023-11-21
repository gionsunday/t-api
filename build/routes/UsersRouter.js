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
 * @example http://localhost:PORT/v1/users
 *
 * @swagger
 * /v1/users:
 *   get:
 *     description: Get all stored users in Database
 *     tags: ["users"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of users
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/UsersSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.UsersComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/users/search
 *
 * @swagger
 * /v1/users/search:
 *   post:
 *      description: Search users
 *      tags: ["users"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: users search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search users
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/UsersSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', components_1.UsersComponent.search);
/**
 * POST method route
 * @example http://localhost:PORT/v1/users
 *
 * @swagger
 * /v1/users:
 *   post:
 *      description: Create new users
 *      tags: ["users"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: users creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UsersSchema'
 *      responses:
 *        201:
 *          description: return created users
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/UsersSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.UsersComponent.create);
/**
 * POST method route
 * @example http://localhost:PORT/v1/users
 *
 * @swagger
 * /v1/users/{id}:
 *   post:
 *      description: Update users
 *      tags: ["users"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: users creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UsersSchema'
 *      responses:
 *        201:
 *          description: return updated users
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/UsersSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', components_1.UsersComponent.update);
/**
 * GET method route
 * @example http://localhost:PORT/v1/users/:id
 *
 * @swagger
 * /v1/users/{id}:
 *  get:
 *    description: Get users by id
 *    tags: ["users"]
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
 *        description: return users by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/UsersSchema'
 */
router.get('/:id', components_1.UsersComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/users/:id
 *
 * @swagger
 * /v1/users/{id}:
 *  delete:
 *    description: Delete users by id
 *    tags: ["users"]
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
 *        description: return deleted users
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/UsersSchema'
 */
router.delete('/:id', components_1.UsersComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=UsersRouter.js.map