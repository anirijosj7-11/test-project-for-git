// script.js - Handles UI interaction and authentication verification
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default page refresh

    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const messageElement = document.getElementById("message");

    // Clear previous status style
    messageElement.className = "message";

    // Validate credentials using AUTH_CONFIG from auth.js
    if (usernameInput === AUTH_CONFIG.validUsername && passwordInput === AUTH_CONFIG.validPassword) {
        messageElement.textContent = "Login Successful! Redirecting...";
        messageElement.classList.add("success");
        
        // Example action after successful login
        setTimeout(() => {
            alert("Welcome, " + usernameInput + "!");
        }, 500);
    } else {
        messageElement.textContent = "Invalid Username or Password!";
        messageElement.classList.add("error");
    }
});