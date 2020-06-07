import { messageControllerInterface } from './message.interface';
import { statusControllerInterface } from './status.interface';
import { configInterface } from '../../config.interface';

export interface createAppInterace {
    (config: configInterface, models: any): {
        status: statusControllerInterface,
        message: messageControllerInterface
    }
}

export interface appInterface {
    status: statusControllerInterface,
    message: messageControllerInterface
}