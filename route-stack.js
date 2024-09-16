import viewRoutes from './routes/views.routes.js';
import dataRoutes from './routes/data.routes.js';
import fileRoutes from './routes/file.routes.js';

export const routeStack = (app) => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // Allow specific methods
        res.header('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers
        next();
    })
    app.use(viewRoutes);
    app.use(dataRoutes);
    app.use(fileRoutes);
}