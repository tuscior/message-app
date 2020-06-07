import { createMessageControllerInterface, messageControllerInterface } from './interfaces/message.interface';
import { messageBody, messageRemoveQuery } from '../models/interfaces/message.interface'

const createMessage = (messageModel) => async (message: messageBody) => {
    const created = await messageModel.create(
        Object.assign({}, message, { created_at: new Date() })
    );
    return created
}
const getAllMessages = (messageModel) => async (query: any) => {
    const results = await messageModel.find({ email: query.email });
    return results;
}

const getAllAndRemoveMessages = (messageModel) => async (query: messageRemoveQuery) => {
    const results = await messageModel.find(query);
    await messageModel.deleteMany(query)
    return results;
}

export const createMessageController:createMessageControllerInterface = (message:any):messageControllerInterface => ({
    create: createMessage(message),
    getAll: getAllMessages(message),
    getAllAndRemove: getAllAndRemoveMessages(message)
})