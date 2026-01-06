document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const newUser = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    // Store user data in JSON
    let users = [];
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to login page after successful signup
    window.location.href = "/login";
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