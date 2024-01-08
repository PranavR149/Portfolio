function downloadResume() {
    // Add the link to your resume PDF file
    window.open('path/to/your/resume.pdf', '_blank');
}

function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Validate the form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Condition 1: If the Name contains any numbers (0 to 9) or special characters (other than space)
    if (/[^a-zA-Z\s]/.test(name)) {
        disableSubmitButton('Name should only contain letters and spaces.');
        return;
    }

    // Condition 2: If the name does not contain @ symbol
    if (!/@/.test(email)) {
        disableSubmitButton('Email should contain the @ symbol.');
        return;
    }

    // Condition 3: If the message is blank
    if (message === '') {
        disableSubmitButton('Message cannot be blank.');
        return;
    }

    // All conditions met, enable the submit button and proceed
    enableSubmitButton();

    // Here, you would typically send the form data to a server using AJAX or fetch.
    // For this example, we'll just log the data to the console.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can reset the form after submission
    document.getElementById('contactForm').reset();
}

function disableSubmitButton(message) {
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    submitButton.disabled = true;
    alert(message); // You can replace this with a more user-friendly way to display messages.
}

function enableSubmitButton() {
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    submitButton.disabled = false;
}
