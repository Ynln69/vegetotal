document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("successMessage").style.display = "block";
    setTimeout(() => {
      document.getElementById("successMessage").style.display = "none";
    }, 5000);
    this.reset();
  });
