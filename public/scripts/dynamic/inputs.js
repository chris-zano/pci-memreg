/**
 * Submits user credentials to the server.
 * 
 * @async
 * @function submitCredentials
 * @param {Object} user_data - An object containing user credentials.
 * @param {string} user_data.firstname - User's first name.
 * @param {string} user_data.lastname - User's last name.
 * @param {string} user_data.dob - User's date of birth.
 * @param {string} user_data.occupation - User's occupation.
 * @param {string} user_data.phone - User's phone number.
 * @param {string} user_data.email - User's email address.
 * @param {string} user_data.gender - User's gender.
 * @returns {Promise<number>} Returns 0 if the submission was successful, otherwise returns -1.
 */
const submitCredentials = async (user_data) => {
    const _userData = user_data;

    // Validate that the input is an object
    if (typeof _userData !== "object") {
        console.warn('$user_data must be of type object');
        return -1;
    }

    // Check if the object is empty
    if (Object.keys(_userData).length === 0) {
        console.warn('$user_data cannot be an empty object');
        return -1;
    }

    // Ensure all fields in the object are not empty
    if (Object.keys(_userData).some(key => !_userData[key])) {
        console.warn('$user_data fields cannot be empty');
        return -1;
    }

    const endPoint = `/data/members/save-one`;
    const headers = {
        "Content-Type": "application/json",
        "ua-auth-x": "not-required",
    };
    const method_type = "POST";

    try {
        const response = await fetch(endPoint, {
            method: method_type,
            headers: headers,
            body: JSON.stringify(user_data)
        });

        // Check if the response is not OK
        if (!response.ok) {
            throw new Error(`request failed: ${JSON.stringify(await response.json())}`);
        }

        return 0;
    } catch (error) {
        console.warn("An unexpected error occurred while saving user data");
        console.error(error);
        return -1;
    }
}

/**
 * Initializes the form submission event listener.
 * 
 * @function inputsMain
 */
const inputsMain = () => {
    const form = document.getElementById('reg-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Get form field values
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const dob = document.getElementById('dob').value;
        const occupation = document.getElementById('occupation').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const gender = document.getElementById('gender').value;

        // Create a user object from form data
        const userObject = {
            firstname,
            lastname,
            dob,
            occupation,
            phone,
            email,
            gender,
        };

        console.log(userObject);

        // Submit the user object
        const result = await submitCredentials(userObject);
        if (result === 0) {
            console.log('User data submitted successfully.');
        } else {
            console.error('Failed to submit user data.');
        }
    });
}
document.addEventListener('DOMContentLoaded', inputsMain);
