import { Router } from 'express';
import { SupportticketsComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/supportTickets
 *
 * @swagger
 * /v1/supportTickets:
 *   get:
 *     description: Get all stored supportTickets in Database
 *     tags: ["supportTickets"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of supportTickets
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/SupportticketsSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', SupportticketsComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/supportTickets/search
 *
 * @swagger
 * /v1/supportTickets/search:
 *   post:
 *      description: Search supportTickets
 *      tags: ["supportTickets"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: supportTickets search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search supportTickets
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/SupportticketsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', SupportticketsComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/supportTickets
 *
 * @swagger
 * /v1/supportTickets:
 *   post:
 *      description: Create new supportTickets
 *      tags: ["supportTickets"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: supportTickets creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SupportticketsSchema'
 *      responses:
 *        201:
 *          description: return created supportTickets
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/SupportticketsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', SupportticketsComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/supportTickets
 *
 * @swagger
 * /v1/supportTickets/{id}:
 *   post:
 *      description: Update supportTickets
 *      tags: ["supportTickets"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: supportTickets creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SupportticketsSchema'
 *      responses:
 *        201:
 *          description: return updated supportTickets
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/SupportticketsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', SupportticketsComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/supportTickets/:id
 *
 * @swagger
 * /v1/supportTickets/{id}:
 *  get:
 *    description: Get supportTickets by id
 *    tags: ["supportTickets"]
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
 *        description: return supportTickets by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/SupportticketsSchema'
 */
router.get('/:id', SupportticketsComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/supportTickets/:id
 *
 * @swagger
 * /v1/supportTickets/{id}:
 *  delete:
 *    description: Delete supportTickets by id
 *    tags: ["supportTickets"]
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
 *        description: return deleted supportTickets
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/SupportticketsSchema'
 */
router.delete('/:id', SupportticketsComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

