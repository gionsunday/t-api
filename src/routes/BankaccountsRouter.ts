import { Router } from 'express';
import { BankaccountsComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/bankAccounts
 *
 * @swagger
 * /v1/bankAccounts:
 *   get:
 *     description: Get all stored bankAccounts in Database
 *     tags: ["bankAccounts"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of bankAccounts
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/BankaccountsSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', BankaccountsComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/bankAccounts/search
 *
 * @swagger
 * /v1/bankAccounts/search:
 *   post:
 *      description: Search bankAccounts
 *      tags: ["bankAccounts"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: bankAccounts search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search bankAccounts
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BankaccountsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', BankaccountsComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/bankAccounts
 *
 * @swagger
 * /v1/bankAccounts:
 *   post:
 *      description: Create new bankAccounts
 *      tags: ["bankAccounts"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: bankAccounts creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BankaccountsSchema'
 *      responses:
 *        201:
 *          description: return created bankAccounts
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BankaccountsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', BankaccountsComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/bankAccounts
 *
 * @swagger
 * /v1/bankAccounts/{id}:
 *   post:
 *      description: Update bankAccounts
 *      tags: ["bankAccounts"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: bankAccounts creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BankaccountsSchema'
 *      responses:
 *        201:
 *          description: return updated bankAccounts
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BankaccountsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', BankaccountsComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/bankAccounts/:id
 *
 * @swagger
 * /v1/bankAccounts/{id}:
 *  get:
 *    description: Get bankAccounts by id
 *    tags: ["bankAccounts"]
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
 *        description: return bankAccounts by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/BankaccountsSchema'
 */
router.get('/:id', BankaccountsComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/bankAccounts/:id
 *
 * @swagger
 * /v1/bankAccounts/{id}:
 *  delete:
 *    description: Delete bankAccounts by id
 *    tags: ["bankAccounts"]
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
 *        description: return deleted bankAccounts
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/BankaccountsSchema'
 */
router.delete('/:id', BankaccountsComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

