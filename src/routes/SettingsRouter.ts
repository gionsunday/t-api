import { Router } from 'express';
import { SettingsComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/settings
 *
 * @swagger
 * /v1/settings:
 *   get:
 *     description: Get all stored settings in Database
 *     tags: ["settings"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of settings
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/SettingsSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', SettingsComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/settings/search
 *
 * @swagger
 * /v1/settings/search:
 *   post:
 *      description: Search settings
 *      tags: ["settings"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: settings search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search settings
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/SettingsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', SettingsComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/settings
 *
 * @swagger
 * /v1/settings:
 *   post:
 *      description: Create new settings
 *      tags: ["settings"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: settings creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SettingsSchema'
 *      responses:
 *        201:
 *          description: return created settings
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/SettingsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', SettingsComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/settings
 *
 * @swagger
 * /v1/settings/{id}:
 *   post:
 *      description: Update settings
 *      tags: ["settings"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: settings creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SettingsSchema'
 *      responses:
 *        201:
 *          description: return updated settings
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/SettingsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', SettingsComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/settings/:id
 *
 * @swagger
 * /v1/settings/{id}:
 *  get:
 *    description: Get settings by id
 *    tags: ["settings"]
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
 *        description: return settings by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/SettingsSchema'
 */
router.get('/:id', SettingsComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/settings/:id
 *
 * @swagger
 * /v1/settings/{id}:
 *  delete:
 *    description: Delete settings by id
 *    tags: ["settings"]
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
 *        description: return deleted settings
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/SettingsSchema'
 */
router.delete('/:id', SettingsComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

