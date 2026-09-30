// script.js - Handles login authentication
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const messageElement = document.getElementById("message");

    messageElement.className = "message";

    if (usernameInput === AUTH_CONFIG.validUsername && passwordInput === AUTH_CONFIG.validPassword) {
        messageElement.textContent = "Login Successful! Redirecting...";
        messageElement.classList.add("success");

        // Save session state so landing page knows user is logged in
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("username", usernameInput);

        // Redirect to landing page after 1 second
        setTimeout(() => {
            window.location.href = "landing.html";
        }, 1000);
    } else {
        messageElement.textContent = "Invalid Username or Password!";
        messageElement.classList.add("error");
    }
});