const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = `$^*ù!:;,""'(-è_ç)`;
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
// FONCTION GENERER UN MOT DE PASSE
const generatePassword = () => {
  let data = [];
  let password = "";
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;

  //   passwordOutput.select();
  function copyToClipboard() {
    var copyText = passwordOutput.value;
    navigator.clipboard.writeText(copyText).then(() => {
      generateButton.textContent = "Copié!";
      setTimeout(() => {
        generateButton.textContent = "Générer un mot de passe";
      }, 2000);
    });
  }
  copyToClipboard();
};
generateButton.addEventListener("click", generatePassword);
