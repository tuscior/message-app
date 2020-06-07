import { Router } from 'express';
import { Request, Response, NextFunction } from "express";
import { messageControllerInterface } from '../../app/interfaces/message.interface';

const getAll = (message: messageControllerInterface) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const email:string = req.params.email;
        const result = await message.getAll({ email: email });
        res.status(200).json(result);
    } catch (err) {
        next(err)
    }
}

export const createMessagesRouter = (router: Router, message: messageControllerInterface) => {
    return router.get('/:email', getAll(message))
}