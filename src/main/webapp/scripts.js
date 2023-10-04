document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Reset previous error messages
        usernameError.textContent = "";
        passwordError.textContent = "";

        // Get values from form inputs
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Simple validation: Check if username and password are not empty
        if (username === "") {
            usernameError.textContent = "Username is required.";
        }

        if (password === "") {
            passwordError.textContent = "Password is required.";
        }

        // If there are no errors, you can proceed with registration logic here.
        // For this example, we're just displaying a success message.
        if (username !== "" && password !== "") {
        
            registrationForm.reset(); // Clear the form
        }
    });
});
