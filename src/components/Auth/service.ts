import * as Joi from '@hapi/joi';
import AuthValidation from './validation';
import { IAuthService } from './interface';
import { ITokenRequest } from './model';
import UsersModel, { IUsersModel } from '../Users/model';
import isPasswordMatch from './model';



/**
 * @export
 * @implements {IAuthService}
 */
const AuthService: IAuthService = {

    /**
     * @param {ITokenRequest} body
     * @returns {Promise <any>}
     * @memberof AuthService
     */
    async generateToken(body: ITokenRequest): Promise<any> {
        try {
            const validate: Joi.ValidationResult<ITokenRequest> = AuthValidation.validteTokenInput(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            //Fetch from collection based on email password
            const { password }: IUsersModel = await UsersModel.findOne(
                {
                    email: body.email  
                })
                const __pass: any = await isPasswordMatch(body.password, password)

                if (__pass) {
                    const user:  IUsersModel = await UsersModel.findOne({
                        email:body.email,
                        password:body.password
                    })
                    return user;
                }

            throw new Error('Invalid password or email');
        } catch (error) {
            throw new Error(error);
        }
    },


    async generateRegistrationToken(body: ITokenRequest): Promise<any> {
        try {
            const validate: Joi.ValidationResult<ITokenRequest> = AuthValidation.validteTokenInput(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }
            return 

            //Fetch from collection based on email password
              

            throw new Error('Invalid password or email');
        } catch (error) {
            throw new Error(error);
        }
    },
};

export default AuthService;



