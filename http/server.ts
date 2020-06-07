import { createRoutes } from './routes/index';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import limitRequests from 'express-rate-limit';
import bodyParser from 'body-parser';
import { errorMiddleware } from '../middleware/index'
import { configInterface } from '../config.interface';
import { appInterface } from '../app/interfaces/index.interface';
import { Application } from 'express';

export const createHttpApp = (config: configInterface, application: appInterface) => {
    const limit = limitRequests({
        windowMs: 60 * 1000, // 1 minute
        max: config.REQUEST_LIMIT,
      });
      const app:Application = express();
      app.use(helmet());
      app.use(limit);
      app.use(cors());
      app.use(morgan('combined'));
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use('/api', createRoutes(express.Router(), application));
      app.use(errorMiddleware);
      return {
          startServer: startHttpServer(config, app)
      }
}

const startHttpServer = (config: configInterface, app: Application) => () => {
  const server = app.listen(config.PORT, () => {
    console.log(`Server listening on port: ${config.PORT}`);
  });
  return {
    stopServer: stopHttpServer(server),
  };
};
  
const stopHttpServer = server => () => {
  return new Promise((resolve, reject) => {
    server.close(() => {
      resolve();
    });
  });
};