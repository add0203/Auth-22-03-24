document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform client-side validation if needed

    fetch("http://localhost:3002/user/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        window.location.href = "dashboard.html"; // Redirect to dashboard page after successful login
      })
      .catch((error) => {
        errorMessage.textContent = error.message;
      });
  });
});
