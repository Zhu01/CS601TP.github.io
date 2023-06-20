// get the form
const contactForm = document.getElementById("contact_form");

// get the user's first name input
const firstName = document.getElementById("firstName");

// get the user's last name input
const lastName = document.getElementById("lastName");

// get the user's email address input
const email = document.getElementById("email");

// get the user's phone number input
const phone = document.getElementById("phone");

// event listener for when the user clicks the contact form's submit button
contactForm.addEventListener("submit", (e) => {

    // call function that validates the inputs
    if (validateUserInput() === false) {
        e.preventDefault();
    }
});



/*
Function that validates the user's inputs.
*/
function validateUserInput() {

    // get the contents of the user's inputs and remove whitespace
    const firstNameContents = firstName.value.trim();
    const lastNameContents = lastName.value.trim();
    const emailContents = email.value.trim();
    const phoneContents = phone.value.trim();

    // flags that indicate that whether values are valid, default to true
    let firstNameFlag = true;
    let lastNameFlag = true;
    let emailFlag = true;
    let phoneFlag = true;

    // valid input message to the user, when there are no input problems
    let validMsg = "You Got It!";

    // if the first name has a length less than 2 or 
    // it doesn't contain alpha characters, show error message
    if ((firstNameContents.length < 2) || !(/^[A-Z]+$/i.test(firstNameContents))) {

        // first name error message to show the user 
        let firstNameErrorMsg = 'Please make sure your "First Name" has at least two characters and all letters!';
        
        // show invalid message next to first name input field
        showErrorMessage(firstNameErrorMsg, "first_name_error_msg");

        // set flag to show it's invalid
        firstNameFlag = false;
    }
    
    else {
        // show valid message next to first name input field
        showValidMessage(validMsg, "first_name_error_msg");
    }


    // if the last name has a length less than 2 or 
    // it doesn't contain alpha characters, show error message
    if ((lastNameContents.length < 2) || !(/^[A-Z]+$/i.test(lastNameContents))) {

        // last name error message to show the user 
        let lastNameErrorMsg = 'Please make sure your "Last Name" has at least two characters and all letters!';
        
        // show invalid message next to last name input field
        showErrorMessage(lastNameErrorMsg, "last_name_error_msg");

        // set flag to show it's invalid
        lastNameFlag = false;
    }
    else {
        // show valid message next to last name input field
        showValidMessage(validMsg, "last_name_error_msg");
    }


    // if the user's inputted email is not a valid email address, 
    // show an error message
    
    // email regex used for validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(emailContents)) {

        // email error message to show the user 
        let emailErrorMsg = "Invalid. Please use the format: zhu01@bu.edu";
        
        // show invalid message next to email input field
        showErrorMessage(emailErrorMsg, "email_error_msg");

        // set flag to show it's invalid
        emailFlag = false;

    }
    else {
        // show valid message next to email input field
        showValidMessage(validMsg, "email_error_msg");
    }


    // if the user's inputted phone number is not a valid number, 
    // show an error message
    
    // phone number regex used for validation
    // This accepts: 000-000-0000 format, 0000000000 format, (000)000-0000, etc.
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    if (!phoneRegex.test(phoneContents)) {

        // phone number error message to show the user 
        let phoneErrorMsg = "Invalid. Please use the format like: 857-498-3212";
        
        // show invalid message next to email input field
        showErrorMessage(phoneErrorMsg, "phone_error_msg");

        // set flag to show it's invalid
        phoneFlag = false;

    }
    else {
        // show valid message next to phone number input field
        showValidMessage(validMsg, "phone_error_msg");
    }


    // return false if any of the flags are false
    if ((firstNameFlag === false) || (lastNameFlag === false) || (emailFlag === false) || (phoneFlag === false)) {
        return false; // this indicates form should not submit yet
    }

    // otherwise, all fields are valid
    else {
    }
}



/*
Function that is used to show an error message for an invalid input.
*/
function showErrorMessage(msg, elementId) {

    // get the error message span for the first name
    const errorSpan = document.getElementById(elementId);

    // change class of the span to be the negative feedback
    errorSpan.className = "neg_feedback";

    // show error message
    errorSpan.innerHTML = msg;
}

/*
Function that is used to show an valid message for an valid input.
*/
function showValidMessage(msg, elementId) {

    // get the error message span for the first name
    const errorSpan = document.getElementById(elementId);

    // change class of the span to be the positive feedback
    errorSpan.className = "pos_feedback";

    // show error message
    errorSpan.innerHTML = msg;
}