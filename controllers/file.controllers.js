import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import { logError } from '../utils/logs.utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const sendGlobalStyleSheet = async (req, res) => {
    try {
        const { filename } = req.params;
        if (!filename) {
            console.log('Filename for global style sheet not provided.', req.params);
            return res.status(400).json({ message: `Filename for global style sheet not provided. ${req.params}` });
        }
        const _globalStylesheetPath = path.join(__dirname, '..', 'public', 'css', 'global', `${filename}.css`);

        if (!fs.existsSync(_globalStylesheetPath)) {
            console.log('No global stylesheet found for ', filename);
            return res.status(404).json({ message: `No global stylesheet found for ${filename}` });
        }

        // res.set('Cache-Control', 'public, max-age=10');
        res.type('css');
        res.status(200);
        return fs.createReadStream(_globalStylesheetPath).pipe(res);
    } catch (error) {
        logError(error);
        return res.status(500).json({ message: 'A internal error occured' });
    }

}

export const sendDynamicStyleSheet = async (req, res) => {
    try {
        const { filename } = req.params;
        if (!filename) {
            console.log('Filename for dynamic style sheet not provided.', req.params);
            return res.status(400).json({ message: `Filename for dynamic style sheet not provided. ${req.params}` });
        }
        const _dynamicStylesheetPath = path.join(__dirname, '..', 'public', 'css', 'dynamic', `${filename}.css`);

        if (!fs.existsSync(_dynamicStylesheetPath)) {
            console.log('No dynamic stylesheet found for ', filename);
            return res.status(404).json({ message: `No dynamic stylesheet found for ${filename}` });
        }

        // res.set('Cache-Control', 'public, max-age=10');
        res.type('css');
        res.status(200);
        return fs.createReadStream(_dynamicStylesheetPath).pipe(res);
    } catch (error) {
        logError(error);
        return res.status(500).json({ message: 'A internal error occured' });
    }

}

export const sendGlobalScripts = async (req, res) => {
    try {
        const { filename } = req.params;
        if (!filename) {
            console.log('Filename for global script not provided.', req.params);
            return res.status(400).json({ message: `Filename for global script not provided. ${req.params}` });
        }
        const _globalScriptPath = path.join(__dirname, '..', 'public', 'scripts', 'global', `${filename}.js`);

        if (!fs.existsSync(_globalScriptPath)) {
            console.log('No global stylesheet found for ', filename);
            return res.status(404).json({ message: `No global script found for ${filename}` });
        }

        // res.set('Cache-Control', 'public, max-age=15');
        res.type('text/javascript');
        res.status(200);
        return fs.createReadStream(_globalScriptPath).pipe(res);
    } catch (error) {
        logError(error);
        return res.status(500).json({ message: 'A internal error occured' });
    }

}

export const sendDynamicScripts = async (req, res) => {
    try {
        const { filename } = req.params;
        if (!filename) {
            console.log('Filename for dynamic script not provided.', req.params);
            return res.status(400).json({ message: `Filename for global script not provided. ${req.params}` });
        }
        const _dynamicScriptPath = path.join(__dirname, '..', 'public', 'scripts', 'dynamic', `${filename}.js`);

        if (!fs.existsSync(_dynamicScriptPath)) {
            console.log('No dynamic stylesheet found for ', filename);
            return res.status(404).json({ message: `No dynamic script found for ${filename}` });
        }

        // res.set('Cache-Control', 'public, max-age=15');
        res.type('text/javascript');
        res.status(200);
        return fs.createReadStream(_dynamicScriptPath).pipe(res);
    } catch (error) {
        logError(error);
        return res.status(500).json({ message: 'A internal error occured' });
    }

}

export const getFavicon = (req, res) => {
    try {
        const filePath = path.join(__dirname, '..', 'public', 'assets', 'favicon', 'favicon.png');
        res.set('Cache-Control', 'public, max-age=86400');
        res.type('image/x-icon');;
        res.status(200);
        fs.createReadStream(filePath).pipe(res);
    } catch (error) {
        logError(error);
        return res.status(500).json({ message: 'A internal error occured' });
    }
}

export const getFonts = (req, res) => {

    try {
        const { filename } = req.params;
        if (!filename) {
            console.log('Filename for font face not provided.', req.params);
            return res.status(400).json({ message: `Filename for font face not provided. ${req.params}` });
        }
        const filePath = path.join(__dirname, '..', '..', 'public', 'assets', 'fonts', `${filename}.ttf`);

        if (!fs.existsSync(_globalStylesheetPath)) {
            console.log('No font face found for ', filename);
            return res.status(404).json({ message: `No font face found for ${filename}` });
        }

        res.set('Cache-Control', 'public, max-age=86400');
        res.type('font/ttf');;
        res.status(200);
        fs.createReadStream(filePath).pipe(res);
    } catch (error) {
        logError(error);
        return res.status(500).json({ message: 'A internal error occured' });
    }
}