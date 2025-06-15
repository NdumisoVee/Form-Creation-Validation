document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function validateForm(event) {
        event.preventDefault(); // Prevent form from submitting

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const feedback = document.getElementById("form-feedback");

        // Track validation messages
        const messages = [];
        let isValid = true;

        // Username validation
        if (username.length < 3) {
            messages.push("Username must be at least 3 characters long.");
            isValid = false;
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            messages.push("Please enter a valid email address.");
            isValid = false;
        }

        // Password validation
        if (password.length < 6) {
            messages.push("Password must be at least 6 characters long.");
            isValid = false;
        }

        // Display results
        if (!isValid) {
            feedback.textContent = messages.join(" ");
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Registration successful!";
            feedback.style.color = "green";
        }
    }

    // Attach event listener
    document.getElementById("registration-form").addEventListener("submit", validateForm);
});
