import { Router } from 'express';
import { NotificationComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/notification
 *
 * @swagger
 * /v1/notification:
 *   get:
 *     description: Get all stored notification in Database
 *     tags: ["notification"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of notification
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/NotificationSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', NotificationComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/notification/search
 *
 * @swagger
 * /v1/notification/search:
 *   post:
 *      description: Search notification
 *      tags: ["notification"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: notification search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search notification
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/NotificationSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', NotificationComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/notification
 *
 * @swagger
 * /v1/notification:
 *   post:
 *      description: Create new notification
 *      tags: ["notification"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: notification creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/NotificationSchema'
 *      responses:
 *        201:
 *          description: return created notification
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/NotificationSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', NotificationComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/notification
 *
 * @swagger
 * /v1/notification/{id}:
 *   post:
 *      description: Update notification
 *      tags: ["notification"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: notification creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/NotificationSchema'
 *      responses:
 *        201:
 *          description: return updated notification
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/NotificationSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', NotificationComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/notification/:id
 *
 * @swagger
 * /v1/notification/{id}:
 *  get:
 *    description: Get notification by id
 *    tags: ["notification"]
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
 *        description: return notification by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/NotificationSchema'
 */
router.get('/:id', NotificationComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/notification/:id
 *
 * @swagger
 * /v1/notification/{id}:
 *  delete:
 *    description: Delete notification by id
 *    tags: ["notification"]
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
 *        description: return deleted notification
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/NotificationSchema'
 */
router.delete('/:id', NotificationComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

