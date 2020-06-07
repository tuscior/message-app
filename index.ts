import { createApp } from './app/index';
import { createHttpApp } from './http/server';
import { startDatabase } from './db';
import * as models from './models/index';
import { config } from './config';
import mongoose from 'mongoose';

const start = async () => {
    // db.getCollection("COLLECTION_NAME").find({"createdAt":{$lt:new Date(Date.now() - 5*60 * 1000)}})
    const app = createApp(config, models);
    const { startServer } = createHttpApp(config, app);
    const stopDatabase = await startDatabase(config.DB_URL, mongoose);
    const { stopServer } = startServer();

    process.on('SIGTERM', async () => {
        console.log('Closing ... ');
        await stopServer();
        stopDatabase();
    });
}
start();