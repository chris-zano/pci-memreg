import { logError } from "../utils/logs.utils.js";

export const processThisData = (req, res) => {
    try {
        console.log(req.params);
        console.log(req.body);
        console.log(req.query);

        return res.status(200).json({message: 'success'});

    } catch (error) {
        logError(error);
    }
}