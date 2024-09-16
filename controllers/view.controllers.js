import { logError } from "../utils/logs.utils.js";

export const renderHomePage = (req, res) => {
    try {
        res.render('index.ejs');
    } catch (error) {
        logError(error);
    }
}