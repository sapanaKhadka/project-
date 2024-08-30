document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    // Basic validation logic for demonstration purposes
    if(username === "admin" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
    }
});

// Adding functionality to "Forgot Password" link
document.getElementById("forgotPassword").addEventListener("click", function(event) {
    event.preventDefault();
    var message = document.getElementById("message");
    message.style.color = "#ff7e5f";
    message.textContent = "A password reset link has been sent to your email.";
});