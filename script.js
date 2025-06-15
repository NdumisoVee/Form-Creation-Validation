// Function to handle form submission
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const feedback = document.getElementById("form-feedback");

    // Basic validation
    if (username.length < 3) {
        feedback.textContent = "Username must be at least 3 characters long.";
        feedback.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
        return;
    }

    if (password.length < 6) {
        feedback.textContent = "Password must be at least 6 characters long.";
        feedback.style.color = "red";
        return;
    }

    // If all is valid
    feedback.textContent = "Registration successful!";
    feedback.style.color = "green";
}

// Attach event listener to form submit
document.getElementById("registration-form").addEventListener("submit", validateForm);
