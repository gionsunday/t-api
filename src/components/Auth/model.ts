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
