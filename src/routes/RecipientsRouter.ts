import { Router } from 'express';
import { RecipientsComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

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
router.get('/', RecipientsComponent.findAll);


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
router.post('/search', RecipientsComponent.search);

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
router.post('/', RecipientsComponent.create);


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
router.patch('/:id', RecipientsComponent.update);


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
router.get('/:id', RecipientsComponent.findOne);

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
router.delete('/:id', RecipientsComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

