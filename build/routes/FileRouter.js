"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@/components");
const express_1 = require("express");
/**
 * @constant {express.Router}
 */
const router = express_1.Router();
/**
 * POST method route
 * @example http://localhost:PORT/file
 *
 * @swagger
 * /upload/:
 *  post:
 *    description: File Upload
 *    tags: ["File Upload"]
 *    security:
 *     - bearerAuth: []
 *    requestBody:
 *      description: list of file
 *      required: true
 *      content:
 *        multipart/form-data:
 *    responses:
 *      200:
 *        description: Upload file
 *        headers:
 *          Authorization:
 *            schema:
 *              type: string
 *            description: JWT token
 *        content:
 *          appication/json:
 *      401:
 *        description: Not logged in, invalid inputs
 *        content:
 *          application/json:
 *            example:
 *              message: Invalid inputs
 */
router.post('/upload', components_1.FileComponent.upload);
/**
 * POST method route
 * @example http://localhost:PORT/file
 *
 * @swagger
 * /upload/:
 *  post:
 *    description: File Upload
 *    tags: ["File Upload"]
 *    security:
 *     - bearerAuth: []
 *    requestBody:
 *      description: Read file
 *      required: true
 *      content:
 *        application/json:
 *    responses:
 *      200:
 *        description: Read file
 *        headers:
 *          Authorization:
 *            schema:
 *              type: string
 *            description: JWT token
 *        content:
 *          appication/json:
 *      401:
 *        description: Not logged in, invalid inputs
 *        content:
 *          application/json:
 *            example:
 *              message: Invalid inputs
 */
router.get('/read/:name', components_1.FileComponent.read);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=FileRouter.js.map