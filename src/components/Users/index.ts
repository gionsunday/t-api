import UsersService from './service';
import { HttpError } from '@/config/error';
import { IUsersModel } from './model';
import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@/config/server';
import * as jwt from 'jsonwebtoken'
import * as nodemailer from 'nodemailer'

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function findAll(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
        const pageNo = req.query.pageNo ? parseInt(req.query.pageNo.toString()) - 1 : 0;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize.toString()) : 20;
        const users: IUsersModel[] = await UsersService.findAll(pageNo, pageSize);
        const totalCount = await UsersService.countAll();
        res.status(200).json({ totalCount: totalCount, records: users, pageNo: pageNo + 1, pageSize: pageSize });
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function search(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
        const pageNo = req.query.pageNo ? parseInt(req.query.pageNo.toString()) - 1 : 0;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize.toString()) : 20;
        const users: IUsersModel[] = await UsersService.search(req.body, pageNo, pageSize);
        const totalCount = await UsersService.countSearch(req.body);
        res.status(201).json({ totalCount: totalCount, records: users, pageNo: pageNo, pageSize: pageSize });
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function findOne(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
        const users: IUsersModel = await UsersService.findOne(req.params.id);

        res.status(200).json(users);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function create(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
        const users: IUsersModel = await UsersService.insert(req.body);

        res.status(201).json(users);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function emailVerification(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    const { email } = req.body;
    try {
        const token: any =  jwt.sign(req.body, process.env.SECRET,  {expiresIn: "5m"});

        var transporter: any = nodemailer.createTransport({
            service :'gmail',
            auth:{
                user: process.env.MAILER_AUTH_EMAIL,
                pass: process.env.MAILER_AUTH_PASS
            }
        });
        const mailOptions = {
            from: process.env.MAILER_AUTH_EMAIL,
            to: email,
            subject: ' Email Account Verification',
            html: `
            <body style="background-color:white; padding:5px; height:100%; width:100%>
            <div style="text-align:left; min-height:100vh; padding:20px">
         
         
             <h4>Email Verification Code</>
             <h2>Your account is almost ready</h2>
            <p>Kindly verify your email to complete your account registration</p> <br/>
      
              <a href="https://8484-gionsunday-tapi-mcxlppcckcf.ws-eu106.gitpod.io/userverification/token" st >Verify</a>
            <p>If this is not your doing,  you can safely ignore this message. Someone might have typed your email address by mistaken <br/> Thanks.</p>
            </div>
            </body>
            
            `
        };

        transporter.sendMail(mailOptions, function(error: any, body: any): any {
            if(error){
                return error;
            }
            res.json({message: 'Email has be sent to you, kindly verify your email to complete registration', token:token})
        })
         

    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function update(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
        const users = await UsersService.update(req.params.id, req.body);
        if (Number(users) > 0) {
            res.status(200).json('Updated successfully');
        } else {
            res.status(400).json('Failed to update');
        }
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function remove(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
        const users: IUsersModel = await UsersService.remove(req.params.id);

        res.status(200).json(users);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

