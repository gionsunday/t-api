import { Router } from 'express';
import { AnnouncementsComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/announcements
 *
 * @swagger
 * /v1/announcements:
 *   get:
 *     description: Get all stored announcements in Database
 *     tags: ["announcements"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of announcements
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/AnnouncementsSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', AnnouncementsComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/announcements/search
 *
 * @swagger
 * /v1/announcements/search:
 *   post:
 *      description: Search announcements
 *      tags: ["announcements"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: announcements search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search announcements
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/AnnouncementsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', AnnouncementsComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/announcements
 *
 * @swagger
 * /v1/announcements:
 *   post:
 *      description: Create new announcements
 *      tags: ["announcements"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: announcements creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AnnouncementsSchema'
 *      responses:
 *        201:
 *          description: return created announcements
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/AnnouncementsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', AnnouncementsComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/announcements
 *
 * @swagger
 * /v1/announcements/{id}:
 *   post:
 *      description: Update announcements
 *      tags: ["announcements"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: announcements creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AnnouncementsSchema'
 *      responses:
 *        201:
 *          description: return updated announcements
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/AnnouncementsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', AnnouncementsComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/announcements/:id
 *
 * @swagger
 * /v1/announcements/{id}:
 *  get:
 *    description: Get announcements by id
 *    tags: ["announcements"]
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
 *        description: return announcements by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/AnnouncementsSchema'
 */
router.get('/:id', AnnouncementsComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/announcements/:id
 *
 * @swagger
 * /v1/announcements/{id}:
 *  delete:
 *    description: Delete announcements by id
 *    tags: ["announcements"]
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
 *        description: return deleted announcements
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/AnnouncementsSchema'
 */
router.delete('/:id', AnnouncementsComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

