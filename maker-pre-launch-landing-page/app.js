const input = document.getElementById("input");
const error = document.getElementById("error");
const button = document.getElementById("submit-button");

button.addEventListener("click", function (event) {
  event.preventDefault();

  if (!input.value || !isValidEmail(input.value)) {
    error.style.display = "inline";
  } else {
    error.style.display = "none";
  }
});

function isValidEmail(email) {
  // Utiliza una expresión regular para validar el formato del email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
