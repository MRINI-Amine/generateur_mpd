function generatePassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
  let password = "";
  for (let i = 0; i < length; ++i) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("mdp");
  const generateButton = document.querySelector("button");

  generateButton.addEventListener("click", function () {
    generateButton.innerHTML = "Génération du mdp en cours...";
    const generatedPassword = generatePassword(16); // 16 caractère
    passwordInput.value = generatedPassword;
    setTimeout(() => {
      generateButton.innerHTML = "Générer mdp";
    }, 500);
  });
});
