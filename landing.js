// landing.js - Protects the landing page and handles logout

// Check authentication on page load
document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const username = sessionStorage.getItem("username");

    // If not logged in, redirect back to login page
    if (isLoggedIn !== "true") {
        window.location.href = "index.html";
        return;
    }

    // Display logged-in user name
    document.getElementById("welcomeUser").textContent = `Welcome, ${username}!`;
});

// Logout Button Handler
document.getElementById("logoutBtn").addEventListener("click", function () {
    // Clear session data
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("username");

    // Redirect to login page
    window.location.href = "index.html";
});