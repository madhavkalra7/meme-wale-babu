document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve user data from JSON
    let users = [];
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
    }

    // Check if the username and password match
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      alert("Login successful!");
      // Redirect to home page or dashboard after successful login
      window.location.href = "/";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
// Get the eye and crossed eye icons
const showPasswordIcon = document.getElementById('showPassword');
const hidePasswordIcon = document.getElementById('hidePassword');

// Get the password input field
const passwordField = document.getElementById('password');

// Function to toggle password visibility
function togglePasswordVisibility() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPasswordIcon.style.display = 'none';
        hidePasswordIcon.style.display = 'inline';
    } else {
        passwordField.type = 'password';
        showPasswordIcon.style.display = 'inline';
        hidePasswordIcon.style.display = 'none';
    }
}

// Add click event listener to the icons
showPasswordIcon.addEventListener('click', togglePasswordVisibility);
hidePasswordIcon.addEventListener('click', togglePasswordVisibility);

// Hide the crossed eye icon initially
hidePasswordIcon.style.display = 'none';