/** @format */

const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");
const passError = document.getElementById("passError");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if (name.value === "") {
    messages.push("name is required");
  }

  if (password.value.length <= 6) {
    passError.innerText = "password must not be longer than 6 characters";
  }

  if (password.value.length >= 20) {
    passError.innerText = "password must be less than 20 characters";
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
  }
  if (password.value === "password") {
    passError.innerText = "password can not be password";
  }
  form.reset();
});
