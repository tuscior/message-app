import * as mongoose from 'mongoose';

export interface IMessage extends mongoose.Document {
    title: string;
    email: string;
    content: string;
    magic_number: number;
    created_at: Date;
};

export interface messageDTO {
    title: string,
    email: string,
    content: string,
    magic_number: number
};

export interface messageBody {
    title: string,
    email: string,
    content: string,
    magic_number: number
};

export type messageRemoveQuery = {
    magic_number: number
};