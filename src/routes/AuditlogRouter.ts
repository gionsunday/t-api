import { Router } from 'express';
import { AuditlogComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

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
router.get('/', AuditlogComponent.findAll);


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
router.post('/search', AuditlogComponent.search);

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
router.post('/', AuditlogComponent.create);


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
router.patch('/:id', AuditlogComponent.update);


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
router.get('/:id', AuditlogComponent.findOne);

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
router.delete('/:id', AuditlogComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

