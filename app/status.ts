import { createStatusControllerInterface, statusControllerInterface } from './interfaces/status.interface';

export const createStatusController:createStatusControllerInterface = ():statusControllerInterface => ({
    status: () => "OK",
    version: () => "1.0.0"
})