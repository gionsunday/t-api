import * as Joi from '@hapi/joi';
import UsersModel, { IUsersModel } from './model';
import UsersValidation from './validation';
import { IUsersService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';
import { emailVerification } from '.';

/**
 * @export
 * @implements {IUsersModelService}
 */
const UsersService: IUsersService = {

    /**
    * @returns {Promise <number>}
    * @memberof UsersService
    */
    async countAll(): Promise<number> {
        try {
            return await UsersModel.countDocuments({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @returns {Promise <number>}
     * @memberof ProductsService
     */
    async countSearch(body: ISearchParamRequest): Promise<number> {
        try {
            const query = GetSearchQuery(body);
            return await UsersModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < IUsersModel[] >}
     * @memberof UsersService
     */
    async findAll(pageNo: number, pageSize: number): Promise<IUsersModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await UsersModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IUsersModel[]>}
    * @memberof UsersService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IUsersModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = UsersValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query = GetSearchQuery(body);
            return await UsersModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
    async findOne(id: string): Promise<IUsersModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = UsersValidation.getUsers({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await UsersModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },


/**
     * @param {IUsersModel} users
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
async emailVerification(body: IUsersModel): Promise<IUsersModel> {
    
    try {
        const validate: Joi.ValidationResult<IUsersModel> = UsersValidation.createUsers(body);

        if (validate.error) {
            throw new Error(validate.error.message);
        }

        // const RegistrationToken: any = await jwt.sign(body, process.env.SECRET, {expiresIn: "5min"});
        // if (!RegistrationToken){
        //     throw new Error("Registration Failed. Please Try Again")
        // }  
        // var transporter = nodemailer.createTransport({
        //     service :'gmail',
        //     auth:{
        //         user: process.env.MAILER_AUTH_EMAIL,
        //         pass: process.env.MAILER_AUTH_PASS
        //     }
        // })

        // const mailOptions:any = {
        //     from: process.env.MAILER_AUTH_EMAIL,
        //     to: email,
        //     subject: ' Email Verification Code',
        //     html: `
        //     <body style="background-color:white; padding:5px; height:100%; width:100%>
        //     <div style="text-align:left; min-height:100vh; padding:20px">
         
         
        //      <h4>Email Verification Code</>
        //      <h2>Your account is almost ready</h2>
        //     <p>Kindly verify your email to complete your account registration</p> <br/>
      
        //       <a href="https://8484-gionsunday-tapi-mcxlppcckcf.ws-eu106.gitpod.io/userverification/token" st >Verify</a>
        //     <p>If this is not your doing,  you can safely ignore this message. Someone might have typed your email address by mistaken <br/> Thanks.</p>
        //     </div>
        //     </body>
            

        //     `
        
        
        // };

        // transporter.sendMail(mailOptions, function(error, body): any {
        //     if(error){
        //         return error
        //     }
        //     return ({message: 'Email has be sent to you, kindly verify your email to complete registration', token:RegistrationToken })
        // })

        // 
        const token: any = await emailVerification
         return token
    } catch (error) {
        throw new Error(error.message);
    }
},



    /**
     * @param {IUsersModel} users
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
    async insert(body: IUsersModel): Promise<IUsersModel> {
        const {email} = body
        try {
            const validate: Joi.ValidationResult<IUsersModel> = UsersValidation.createUsers(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const isEmailTaken: any = await UsersModel.isEmailTaken(email);
            if (isEmailTaken){
                throw new Error("Account with Email exist. Login or use a diffrent Email")
            }  
            
            const users: IUsersModel = await UsersModel.create(body);

            return users;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IUsersModel} users
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
    async update(id: string, body: IUsersModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IUsersModel> = UsersValidation.updateUsers(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const users = await UsersModel.updateOne({ _id: Types.ObjectId(id) }, { $set: body });

            return users.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IUsersModel >}
     * @memberof UsersService
     */
    async remove(id: string): Promise<IUsersModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = UsersValidation.removeUsers({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const users: IUsersModel = await UsersModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return users;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default UsersService;

