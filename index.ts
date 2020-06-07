import { createApp } from './app/index';
import { createHttpApp } from './http/server';
import { startDatabase } from './db';
import * as models from './models/index';
import { config } from './config';
import mongoose from 'mongoose';

const start = async () => {
    const app = createApp(config, models);
    const { startServer } = createHttpApp(config, app);
    const stopDatabase = await startDatabase(config.DB_URL, mongoose);
    const { stopServer } = startServer();

    process.on('SIGTERM', async () => {
        console.log('Closing ... ');
        await stopServer();
        stopDatabase();
    }).on('unhandledRejection', (reason, p) => {
      console.error(reason, 'Unhandled Rejection at Promise', p);
    }).on('uncaughtException', err => {
      console.error(err, 'Uncaught Exception thrown');
      process.exit(1);
    });
}
start();