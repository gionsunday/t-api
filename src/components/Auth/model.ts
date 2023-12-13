import * as bcrypt from "bcrypt"
/**
 * @export
 * @interface ITokenRequest
 */
export interface ITokenRequest {
    email: string;
    password: string;
}
/**
 * @export
 * @interface ITokenResponse
 */
export interface ITokenResponse {
    accessToken: string;
    expiresIn: Number;
    userData: any;
}


/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */

const isPasswordMatch = async function (password:String, userPassword:any) : Promise<boolean> {
    return await bcrypt.compare(password, userPassword);
  };

  export default isPasswordMatch