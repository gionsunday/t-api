import { Router } from 'express';
import { CompanyinfoComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/companyInfo
 *
 * @swagger
 * /v1/companyInfo:
 *   get:
 *     description: Get all stored companyInfo in Database
 *     tags: ["companyInfo"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of companyInfo
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/CompanyinfoSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', CompanyinfoComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/companyInfo/search
 *
 * @swagger
 * /v1/companyInfo/search:
 *   post:
 *      description: Search companyInfo
 *      tags: ["companyInfo"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: companyInfo search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search companyInfo
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CompanyinfoSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/search', CompanyinfoComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/companyInfo
 *
 * @swagger
 * /v1/companyInfo:
 *   post:
 *      description: Create new companyInfo
 *      tags: ["companyInfo"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: companyInfo creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CompanyinfoSchema'
 *      responses:
 *        201:
 *          description: return created companyInfo
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CompanyinfoSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', CompanyinfoComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/companyInfo
 *
 * @swagger
 * /v1/companyInfo/{id}:
 *   post:
 *      description: Update companyInfo
 *      tags: ["companyInfo"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: companyInfo creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CompanyinfoSchema'
 *      responses:
 *        201:
 *          description: return updated companyInfo
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CompanyinfoSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', CompanyinfoComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/companyInfo/:id
 *
 * @swagger
 * /v1/companyInfo/{id}:
 *  get:
 *    description: Get companyInfo by id
 *    tags: ["companyInfo"]
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
 *        description: return companyInfo by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CompanyinfoSchema'
 */
router.get('/:id', CompanyinfoComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/companyInfo/:id
 *
 * @swagger
 * /v1/companyInfo/{id}:
 *  delete:
 *    description: Delete companyInfo by id
 *    tags: ["companyInfo"]
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
 *        description: return deleted companyInfo
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CompanyinfoSchema'
 */
router.delete('/:id', CompanyinfoComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

