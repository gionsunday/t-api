import { Router } from 'express';
import { CurrenciesComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/currencies
 *
 * @swagger
 * /v1/currencies:
 *   get:
 *     description: Get all stored currencies in Database
 *     tags: ["currencies"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of currencies
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/CurrenciesSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', CurrenciesComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/currencies/search
 *
 * @swagger
 * /v1/currencies/search:
 *   post:
 *      description: Search currencies
 *      tags: ["currencies"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: currencies search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search currencies
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CurrenciesSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', CurrenciesComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/currencies
 *
 * @swagger
 * /v1/currencies:
 *   post:
 *      description: Create new currencies
 *      tags: ["currencies"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: currencies creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CurrenciesSchema'
 *      responses:
 *        201:
 *          description: return created currencies
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CurrenciesSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', CurrenciesComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/currencies
 *
 * @swagger
 * /v1/currencies/{id}:
 *   post:
 *      description: Update currencies
 *      tags: ["currencies"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: currencies creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CurrenciesSchema'
 *      responses:
 *        201:
 *          description: return updated currencies
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CurrenciesSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', CurrenciesComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/currencies/:id
 *
 * @swagger
 * /v1/currencies/{id}:
 *  get:
 *    description: Get currencies by id
 *    tags: ["currencies"]
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
 *        description: return currencies by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CurrenciesSchema'
 */
router.get('/:id', CurrenciesComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/currencies/:id
 *
 * @swagger
 * /v1/currencies/{id}:
 *  delete:
 *    description: Delete currencies by id
 *    tags: ["currencies"]
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
 *        description: return deleted currencies
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CurrenciesSchema'
 */
router.delete('/:id', CurrenciesComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

