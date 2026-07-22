// Select the input field elements.
const fullNameInputEl = document.querySelector("#full-name");
const emailInputEl = document.querySelector("#email");
const orderNoInputEl = document.querySelector("#order-no");
const productCodeInputEl = document.querySelector("#product-code");
const quantityInputEl = document.querySelector("#quantity");

// Select the complaint description elements.
const complaintsGroup = document.querySelector("#complaints-group")
const complaintsCheckboxes = complaintsGroup.querySelectorAll('input[type="checkbox"][name="complaint"]');
const otherComplaintCheckboxEl = document.querySelector("#other-complaint")
const complaintDescriptionInputEl = document.querySelector("#complaint-description");

// Select the solution description elements.
const solutionsGroup = document.querySelector("#solutions-group")
const solutionsRadios = solutionsGroup.querySelectorAll('input[type="radio"][name="solutions"]')
const otherSolutionCheckboxEl = document.querySelector("#other-solution")
const solutionDescriptionInputEl = document.querySelector("#solution-description");

// Return a form validity object with the validity of each input.
function validateForm() {
    // Define a template form validity object to represent the validity of each input of the form.
    let formValidityObject = {
        "full-name": false,
        "email": false,
        "order-no": false,
        "product-code": false,
        "quantity": false,
        "complaints-group": false,
        "complaint-description": false,
        "solutions-group": false,
        "solution-description": false,
    };

    // 1. Check if full name input is filled.
    if (fullNameInputEl.value) {
        formValidityObject["full-name"] = true;
    }

    // 2. Check if the email is a valid email address.
    const emailRegEx = /^.+@.+\..+$/;
    if (emailRegEx.test(emailInputEl.value)) {
        formValidityObject["email"] = true;
    }

    // 3. Check that the order-no is a sequence of ten numbers starting with 2024.
    const orderNoRegEx = /^2024\d{6}$/
    if (orderNoRegEx.test(orderNoInputEl.value)) {
        formValidityObject["order-no"] = true;
    }

    // 4. Check that the product code follows the regular expression.

    // XX##-X###-XX#, where X represents either a lowercase letter or an uppercase letter and # represents a number.
    const productCodeRegEx = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/
    if (productCodeRegEx.test(productCodeInputEl.value)) {
        formValidityObject["product-code"] = true;
    }

    // 5. Check that quantity is a positive integer.
    if (quantityInputEl.value > 0) {
        formValidityObject["quantity"] = true;
    }

    // 6.1 Check that a complaint description is provided either by checkbox.
    const checkedComplaints = complaintsGroup.querySelectorAll('input[type="checkbox"][name="complaint"]:checked');

    const isComplaintSelected = checkedComplaints.length

    if (isComplaintSelected) {
        formValidityObject["complaints-group"] = true;
    }

    // 6.2 Check that a complaint description is filled in text if the "Other" checkbox is checked.
    if (otherComplaintCheckboxEl.checked) {
        if (complaintDescriptionInputEl.value.length >= 20) {
            formValidityObject["complaint-description"] = true;
        }
    } else {
        formValidityObject["complaint-description"] = true;
    }

    // 7.1 Check that a solution is selected from the radio buttons.
    const checkedSolution = solutionsGroup.querySelector('input[type="radio"]:checked');

    if (checkedSolution) {
        formValidityObject["solutions-group"] = true;
    }

    // 7.2 Check that a solution description has been provided in text.

    if (checkedSolution == otherSolutionCheckboxEl) {
        if (solutionDescriptionInputEl.value.length >= 20) {
            formValidityObject["solution-description"] = true;
        }
    } else {
        formValidityObject["solution-description"] = true;
    }

    return formValidityObject;
}

// Return a bool value determinning validity of an object from validateForm() while highlighting invalid elements.
function isValid(formValidityObject) {
    let isValidCheckResult = true;

    // Iterate through the entries of formValidityObject.
    for (const [key, value] of Object.entries(formValidityObject)) {
        // Check if the value is false.
        if (!value) {
            // Highlight the invalid element using the key as the id.
            document.querySelector(`#${key}`).style.borderColor = "red";

            // If so, set the result false.
            isValidCheckResult = false;
        }
    }

    // Return the result of the validity check.
    return isValidCheckResult;
}

// Add border color changes to form fields.
const formFields = [fullNameInputEl, emailInputEl, orderNoInputEl, productCodeInputEl, quantityInputEl];

// Iterate through each of the form fields.
formFields.forEach(
    (inputEl) => {
        // Detect changes to a form field.
        inputEl.addEventListener(
            "change",
            () => {
                // Check if the newly inputted value is valid by calling validateForm() and accessing the input element value.
                if (validateForm()[inputEl.id]) {
                    inputEl.style.borderColor = "green"
                } else {
                    inputEl.style.borderColor = "red"
                }
            }
        )
    }
)

// Add border color changes to the complaints group.
complaintsCheckboxes.forEach(
    (checkbox) => {
        // Detect checking or unchecking a checkbox.
        checkbox.addEventListener(
            "change",
            (event) => {
                // Update the complaints group border color.
                if (validateForm()["complaints-group"]) {
                    complaintsGroup.style.borderColor = "green";
                } else {
                    complaintsGroup.style.borderColor = "red";
                }

                // Perhaps update the complaint text description as well.
                if (validateForm()["complaint-description"]) {
                    complaintDescriptionInputEl.style.borderColor = "green";
                } else {
                    complaintDescriptionInputEl.style.borderColor = "red";
                }
            }
        )
    }
);

// Add border color changes to the text description for complaints.
complaintDescriptionInputEl.addEventListener(
    "change",
    (event) => {
        if (validateForm()["complaint-description"]) {
            complaintDescriptionInputEl.style.borderColor = "green";
        } else {
            complaintDescriptionInputEl.style.borderColor = "red";
        }
    }
)

// Add border color changes to the solutions group.
solutionsRadios.forEach(
    (radio) => {
        // Detect checking a radio button.
        radio.addEventListener(
            "change",
            (event) => {
                // Update the solutions group border color.
                if (validateForm()["solutions-group"]) {
                    solutionsGroup.style.borderColor = "green";
                } else {
                    solutionsGroup.style.borderColor = "red";
                }

                // Perhaps update the solutions text description as well.
                if (validateForm()["solution-description"]) {
                    solutionDescriptionInputEl.style.borderColor = "green";
                } else {
                    solutionDescriptionInputEl.style.borderColor = "red";
                }
            }
        )
    }
)

// Add border color changes to the text description for solutions.
solutionDescriptionInputEl.addEventListener(
    "change",
    (event) => {
        if (validateForm()["solution-description"]) {
            solutionDescriptionInputEl.style.borderColor = "green";
        } else {
            solutionDescriptionInputEl.style.borderColor = "red";
        }
    }
)


const complaintForm = document.querySelector("#form");
const submitFormBtn = document.querySelector("#submit-btn");
const messageBoxEl = document.querySelector("#message-box");

// Add an event listener to the form itself to check if the form is valid upon submission.
complaintForm.addEventListener(
    "submit",
    (submitEvent) => {
        // Prevent the page from reloading.
        submitEvent.preventDefault();

        // Validate the form's inputs and get the validation object using validateForm()
        const validationObject = validateForm();

        // Call isValid() to highlight invalid elements and get a bool value.
        const isFormValid = isValid(validationObject);

        if (!isFormValid) {
            messageBoxEl.innerText = "Fix something.";
            return
        }
        
        messageBoxEl.innerText = "Form submitted successfully."

        const formData = new FormData(submitEvent.target);

        const formValues = Object.fromEntries(formData.entries());

        console.log(formValues); 
        
        // Then one could perhaps process the form data.
    }
)