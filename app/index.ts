import { createStatusController } from './status';
import { createMessageController } from './message';
import { createAppInterace } from './interfaces/index.interface';

export const createApp:createAppInterace = (config, models) => ({
    message: createMessageController(models.message),
    status: createStatusController()
})