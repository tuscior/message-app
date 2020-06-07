import { Request, Response, NextFunction } from "express";

interface Error {
    httpStatusCode?: number;
    message?: string;
}

export const errorMiddleware = (err: Error , req: Request, res: Response, next: NextFunction) => {
    res.status(err.httpStatusCode || 500).json({ error: err.message });
}