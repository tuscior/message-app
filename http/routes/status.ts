import { Router } from 'express'
import { Request, Response, NextFunction } from "express";
import { statusControllerInterface } from '../../app/interfaces/status.interface';

const status = ({ status }: statusControllerInterface) => (req: Request, res: Response) => {
    const result = status();
    res.status(200).json(result);
};
  
  const version = ({ version }: statusControllerInterface) => (req: Request, res: Response) => {
    const result = version();
    res.status(200).json(result);
};

export const createStatusRouter = (router: Router, health: statusControllerInterface) => {
    return router.get('/version', version(health)).get('/status', status(health))
}