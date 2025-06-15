document.addEventListener("DOMContentLoaded", function () {
    function display(message, isError = true) {
        const feedbackDiv = document.getElementById("form-feedback");
        feedbackDiv.innerHTML = message;
        feedbackDiv.style.color = isError ? "#dc3545" : "green";
    }

    function validateForm(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const messages = [];
        let isValid = true;

        if (username.length < 3) {
            messages.push("Username must be at least 3 characters long.");
            isValid = false;
        }

        if (!email.includes("@") || !email.includes(".")) {
            messages.push("Please enter a valid email address.");
            isValid = false;
        }

        if (password.length < 8) {
            messages.push("Password must be at least 8 characters long.");
            isValid = false;
        }

        if (!isValid) {
            display(messages.join("<br>"), true);
        } else {
            display("Registration successful!", false);
        }
    }

    document.getElementById("registration-form").addEventListener("submit", validateForm);
});
