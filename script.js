const passwordBox = document.getElementById("password");
const length = 16;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
const allCharacters = uppercase + lowercase + numbers + symbols;

function generatePassword() {
  let password = "";
  while (password.length < length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordBox.value = password;
}
function copyPassword() {
  passwordBox.select();
  passwordBox.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
// Generate a password on page load
window.addEventListener("DOMContentLoaded", () => {
  generatePassword();
});
