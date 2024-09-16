import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { dirname } from 'path';
import { routeStack } from './route-stack.js';


const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const app = express();
const server = createServer(app);

const STATIC_FILES_PATH = path.join(_dirname, 'public');
const VIEWS_PATH = path.join(_dirname, 'views');

dotenv.config();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('public', express.static(STATIC_FILES_PATH));
app.set('views', VIEWS_PATH);
app.set('view engine', 'ejs');

const username = encodeURIComponent(process.env.MONGO_DB_USERNAME);
const password = encodeURIComponent(process.env.MONGO_DB_PASSWORD);
const clusterName = encodeURIComponent(process.env.CLUSTER_NAME);
const appName = encodeURIComponent(process.env.APP_NAME);
const databasename = encodeURIComponent(process.env.DATABASE_NAME);

const uri = `mongodb+srv://${username}:${password}@${clusterName}.jwscxvu.mongodb.net/${databasename}?retryWrites=true&w=majority&appName=${appName}`;
const local_uri = `${process.env.LOCAL_DB_HOST}${databasename}`;

mongoose.connect(local_uri)
    .then(() => {
        const PORT = process.env.PORT || 8080;
        server.listen(PORT, () => {
            console.log(`App is live on port ${PORT}`);
        })

        //call and execute routeStack
        routeStack(app);

        process.on('SIGTERM', () => {
            server.close(() => {
                console.log('process terminated. closing database connection');
                mongoose.connection.close(false, () => {
                    console.log('mongoose connection closed.');
                    process.exit(0);
                });
            });
        });
    })
    .catch((error) => {
        console.log('Failed to connect to database.');
        console.error(error);
    });
