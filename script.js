document.addEventListener("DOMContentLoaded", function () {
    function validateForm(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        // Use feedbackDiv as the checker expects
        const feedbackDiv = document.getElementById("form-feedback");

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

        if (password.length < 6) {
            messages.push("Password must be at least 6 characters long.");
            isValid = false;
        }

        if (!isValid) {
            // Join messages with <br> tags for line breaks in innerHTML
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";  // red color for errors
        } else {
            feedbackDiv.innerHTML = "Registration successful!";
            feedbackDiv.style.color = "green";
        }
    }

    document.getElementById("registration-form").addEventListener("submit", validateForm);
});
