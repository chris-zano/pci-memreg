import { logError } from "../utils/logs.utils.js";

export const processThisData = (req, res) => {
    try {
        console.log(req.params);
        console.log(req.body);
        console.log(req.query);

        return res.status(200).json({ message: 'success' });

    } catch (error) {
        logError(error);
    }
}
/**
 * Saves member information to the database.
 * 
 * @async
 * @function saveMemberInformation
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request, containing member details.
 * @param {string} req.body.firstname - Member's first name.
 * @param {string} req.body.lastname - Member's last name.
 * @param {string} req.body.dob - Member's date of birth.
 * @param {string} req.body.gender - Member's gender.
 * @param {string} req.body.occupation - Member's occupation.
 * @param {string} req.body.phone - Member's phone number.
 * @param {string} req.body.email - Member's email address.
 * @param {Object} res - The response object.
 * @returns {Promise<Object>} JSON response with status code and result of the operation.
 */
export const saveMemberInformation = async (req, res) => {
    // Check if request body exists and is not empty
    if (!req.body || Object.keys(req.body).length === 0) {
        console.log('missing request body');
        console.log(req.body);
        return res.status(400).json({
            header: 'Invalid request',
            action: `POST on ${req.path}`,
            error: 'missing request body'
        });
    }

    // Check for empty fields in the request body
    if (Object.keys(req.body).some(key => !req.body[key])) {
        console.log('request body cannot contain empty fields');
        console.log(req.body);
        return res.status(400).json({
            header: 'Invalid request',
            action: `POST on ${req.path}`,
            error: 'request body has missing data'
        });
    }

    try {
        const { firstname, lastname, dob, gender, occupation, phone, email } = req.body;

        console.log({ firstname, lastname, dob, gender, occupation, phone, email });

        // Process the data and store it in the database (replace with actual logic)

        // Return success response
        return res.status(200).json({ header: "success" });
    } catch (error) {
        // Log the error and send back a 500 response
        logError(error); // Assuming logError is defined elsewhere
        return res.status(500).json({
            header: 'Internal server error',
            action: `POST on ${req.path}`,
            error: 'an unexpected error occurred while processing your request'
        });
    }
};
