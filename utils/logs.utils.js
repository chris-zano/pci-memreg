import { MongooseError } from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const logError = (error) => {
    if (error instanceof MongooseError) {
        const eMes = new MongooseError(error.message);
        console.error(eMes.stack);
    }
    else if (error instanceof ReferenceError) {
        const eMes = new ReferenceError(error.message)
        console.error(eMes.stack);
    }
    else if (error instanceof SyntaxError) {
        const eMes = new SyntaxError(error.message);
        console.error(eMes.stack);
    }
    else if (error instanceof TypeError) {
        const eMes = new TypeError(error.message);
        console.error(eMes.stack);
    }
    else {
        let unknown_error = new Error(error);
        console.log("An error occured: ", unknown_error.name, " :: ", unknown_error.message );
        console.log(unknown_error.stack);
    }
    console.error(error);
    return 0;
};