const getSelectedGender = () => {
    const male = document.getElementById('male');
    const female = document.getElementById('female');

    return male.checked ? 'male' : female.checked ? 'female' : 'other'
}

const sanitizeInputs = (object) => {
    
}

const inputsMain = () => {
    const form = document.getElementById('reg-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const dob = document.getElementById('dob').value;
        const occupation = document.getElementById('occupation').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const gender = getSelectedGender();

        const userObject = {
            firstname: firstname,
            lastname: lastname,
            dob: dob,
            occupation: occupation,
            phone: phone,
            email: email,
            gender: gender,
        }

        sanitizeInputs(userObject);
        console.log(userObject);
    });
}

document.addEventListener('DOMContentLoaded', inputsMain);