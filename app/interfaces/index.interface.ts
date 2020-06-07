import { messageControllerInterface } from './message.interface';
import { statusControllerInterface } from './status.interface';
import { configInterface } from '../../config.interface';

export interface createAppInterace {
    (config: configInterface, models): {
        status: statusControllerInterface,
        message: messageControllerInterface
    }
}

export interface appInterface {
    status: statusControllerInterface,
    message: messageControllerInterface
}