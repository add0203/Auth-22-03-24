document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const errorMessage = document.getElementById("errorMessage");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform client-side validation if needed

    // fetch("http://localhost:3002/user/register", {
    
    fetch("https://auth-22-03-2024-back.onrender.com/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Signup failed");
        }
        console.log("loged in");
        window.location.href = "login.html"; // Redirect to login page after successful signup
      })
      .catch((error) => {
        errorMessage.textContent = error.message;
      });
  });
});
