import { messageBody, messageDTO, messageRemoveQuery } from '../../models/interfaces/message.interface'

export interface messageControllerInterface {
    create: (message: messageBody) => Promise<messageDTO>,
    getAll: (email) => Promise<Array<messageDTO>>,
    getAllAndRemove: (query: messageRemoveQuery) => Promise<Array<messageDTO>>
}
export interface createMessageControllerInterface {
    (models):messageControllerInterface
}