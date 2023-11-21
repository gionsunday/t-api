import { Router } from 'express';
import { BeneficiaryComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/beneficiary
 *
 * @swagger
 * /v1/beneficiary:
 *   get:
 *     description: Get all stored beneficiary in Database
 *     tags: ["beneficiary"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of beneficiary
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/BeneficiarySchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', BeneficiaryComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/beneficiary/search
 *
 * @swagger
 * /v1/beneficiary/search:
 *   post:
 *      description: Search beneficiary
 *      tags: ["beneficiary"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: beneficiary search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search beneficiary
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BeneficiarySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', BeneficiaryComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/beneficiary
 *
 * @swagger
 * /v1/beneficiary:
 *   post:
 *      description: Create new beneficiary
 *      tags: ["beneficiary"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: beneficiary creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BeneficiarySchema'
 *      responses:
 *        201:
 *          description: return created beneficiary
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BeneficiarySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', BeneficiaryComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/beneficiary
 *
 * @swagger
 * /v1/beneficiary/{id}:
 *   post:
 *      description: Update beneficiary
 *      tags: ["beneficiary"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: beneficiary creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BeneficiarySchema'
 *      responses:
 *        201:
 *          description: return updated beneficiary
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/BeneficiarySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', BeneficiaryComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/beneficiary/:id
 *
 * @swagger
 * /v1/beneficiary/{id}:
 *  get:
 *    description: Get beneficiary by id
 *    tags: ["beneficiary"]
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
 *        description: return beneficiary by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/BeneficiarySchema'
 */
router.get('/:id', BeneficiaryComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/beneficiary/:id
 *
 * @swagger
 * /v1/beneficiary/{id}:
 *  delete:
 *    description: Delete beneficiary by id
 *    tags: ["beneficiary"]
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
 *        description: return deleted beneficiary
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/BeneficiarySchema'
 */
router.delete('/:id', BeneficiaryComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

