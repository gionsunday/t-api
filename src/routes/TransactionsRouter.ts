import { Router } from 'express';
import { TransactionsComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/transactions
 *
 * @swagger
 * /v1/transactions:
 *   get:
 *     description: Get all stored transactions in Database
 *     tags: ["transactions"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of transactions
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/TransactionsSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', TransactionsComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/transactions/search
 *
 * @swagger
 * /v1/transactions/search:
 *   post:
 *      description: Search transactions
 *      tags: ["transactions"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: transactions search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search transactions
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/TransactionsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', TransactionsComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/transactions
 *
 * @swagger
 * /v1/transactions:
 *   post:
 *      description: Create new transactions
 *      tags: ["transactions"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: transactions creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TransactionsSchema'
 *      responses:
 *        201:
 *          description: return created transactions
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/TransactionsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', TransactionsComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/transactions
 *
 * @swagger
 * /v1/transactions/{id}:
 *   post:
 *      description: Update transactions
 *      tags: ["transactions"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: transactions creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TransactionsSchema'
 *      responses:
 *        201:
 *          description: return updated transactions
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/TransactionsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', TransactionsComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/transactions/:id
 *
 * @swagger
 * /v1/transactions/{id}:
 *  get:
 *    description: Get transactions by id
 *    tags: ["transactions"]
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
 *        description: return transactions by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/TransactionsSchema'
 */
router.get('/:id', TransactionsComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/transactions/:id
 *
 * @swagger
 * /v1/transactions/{id}:
 *  delete:
 *    description: Delete transactions by id
 *    tags: ["transactions"]
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
 *        description: return deleted transactions
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/TransactionsSchema'
 */
router.delete('/:id', TransactionsComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

