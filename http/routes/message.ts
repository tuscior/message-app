import { Router } from 'express'
import { Request, Response, NextFunction } from "express";
import { messageBody } from '../../models/interfaces/message.interface'
import { messageControllerInterface } from '../../app/interfaces/message.interface';

const create = ({ create }: messageControllerInterface) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const message:messageBody = req.body;
        const result = await create(message);
        res.status(201).json(result);
    } catch (err) {
        next(err)
    }
}

export const createMessageRouter = (router: Router, message: messageControllerInterface) => {
    return router.post('/', create(message))
}