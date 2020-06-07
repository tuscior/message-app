import { createMessageRouter } from './message';
import { createMessagesRouter } from './messages';
import { createSendRouter } from './send';

import { createStatusRouter } from './status';
import { Router } from 'express'
import { appInterface } from '../../app/interfaces/index.interface';

export const createRoutes = (appRouter: Router, application: appInterface) => {
    appRouter.use('/health', createStatusRouter(Router(), application.status))
    appRouter.use('/message', createMessageRouter(Router(), application.message))
    appRouter.use('/messages', createMessagesRouter(Router(), application.message))
    appRouter.use('/send', createSendRouter(Router(), application.message))
    return appRouter;
}