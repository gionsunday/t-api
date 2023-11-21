import KycdocumentsService from './service';
import { HttpError } from '@/config/error';
import { IKycdocumentsModel } from './model';
import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@/config/server';

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
        const kycDocuments: IKycdocumentsModel[] = await KycdocumentsService.findAll(pageNo, pageSize);
        const totalCount = await KycdocumentsService.countAll();
        res.status(200).json({ totalCount: totalCount, records: kycDocuments, pageNo: pageNo + 1, pageSize: pageSize });
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
        const kycDocuments: IKycdocumentsModel[] = await KycdocumentsService.search(req.body, pageNo, pageSize);
        const totalCount = await KycdocumentsService.countSearch(req.body);
        res.status(201).json({ totalCount: totalCount, records: kycDocuments, pageNo: pageNo, pageSize: pageSize });
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
        const kycDocuments: IKycdocumentsModel = await KycdocumentsService.findOne(req.params.id);

        res.status(200).json(kycDocuments);
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
        const kycDocuments: IKycdocumentsModel = await KycdocumentsService.insert(req.body);

        res.status(201).json(kycDocuments);
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
        const kycDocuments = await KycdocumentsService.update(req.params.id, req.body);
        if (kycDocuments > 0) {
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
        const kycDocuments: IKycdocumentsModel = await KycdocumentsService.remove(req.params.id);

        res.status(200).json(kycDocuments);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

