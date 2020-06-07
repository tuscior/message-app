import { Router } from 'express'
import { Request, Response, NextFunction } from "express";
import { messageControllerInterface } from '../../app/interfaces/message.interface';

const getAndRemove = (message: messageControllerInterface) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = req.body;
        const result = await message.getAllAndRemove(query);
        res.status(200).json(result);
    } catch (err) {
        next(err)
    }
}

export const createSendRouter = (router: Router, message: messageControllerInterface) => {
    return router.post('/', getAndRemove(message))
}