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
 * @example http://localhost:PORT/login
 *
 * @swagger
 * /auth/login/:
 *  post:
 *    description: Login user to application
 *    tags: ["auth"]
 *    requestBody:
 *      description: login body
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ToekenRequestSchema'
 *          example:
 *            username: admin
 *            password: admin123
 *    responses:
 *      200:
 *        description: user successfuly logged in
 *        headers:
 *          Authorization:
 *            schema:
 *              type: string
 *            description: JWT token
 *        content:
 *          appication/json:
 *            example:
 *              message: Token Generation Success!
 *      401:
 *        description: Not logged in, invalid credentials
 *        content:
 *          application/json:
 *            example:
 *              message: Invalid credentials
 */
router.post('/login', components_1.AuthComponent.login);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=AuthRouter.js.map