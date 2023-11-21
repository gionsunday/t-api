import { Router } from 'express';
import { ExchangeratesComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/exchangeRates
 *
 * @swagger
 * /v1/exchangeRates:
 *   get:
 *     description: Get all stored exchangeRates in Database
 *     tags: ["exchangeRates"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of exchangeRates
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/ExchangeratesSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', ExchangeratesComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/exchangeRates/search
 *
 * @swagger
 * /v1/exchangeRates/search:
 *   post:
 *      description: Search exchangeRates
 *      tags: ["exchangeRates"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: exchangeRates search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search exchangeRates
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ExchangeratesSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', ExchangeratesComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/exchangeRates
 *
 * @swagger
 * /v1/exchangeRates:
 *   post:
 *      description: Create new exchangeRates
 *      tags: ["exchangeRates"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: exchangeRates creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ExchangeratesSchema'
 *      responses:
 *        201:
 *          description: return created exchangeRates
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ExchangeratesSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', ExchangeratesComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/exchangeRates
 *
 * @swagger
 * /v1/exchangeRates/{id}:
 *   post:
 *      description: Update exchangeRates
 *      tags: ["exchangeRates"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: exchangeRates creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ExchangeratesSchema'
 *      responses:
 *        201:
 *          description: return updated exchangeRates
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ExchangeratesSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', ExchangeratesComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/exchangeRates/:id
 *
 * @swagger
 * /v1/exchangeRates/{id}:
 *  get:
 *    description: Get exchangeRates by id
 *    tags: ["exchangeRates"]
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
 *        description: return exchangeRates by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/ExchangeratesSchema'
 */
router.get('/:id', ExchangeratesComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/exchangeRates/:id
 *
 * @swagger
 * /v1/exchangeRates/{id}:
 *  delete:
 *    description: Delete exchangeRates by id
 *    tags: ["exchangeRates"]
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
 *        description: return deleted exchangeRates
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/ExchangeratesSchema'
 */
router.delete('/:id', ExchangeratesComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

