// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pw1El = document.getElementById("pw1");
const pw2El = document.getElementById("pw2");

let passwordLength = 15;

function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generatePassword() {
  // first password
  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomCharacter();
  }
  pw1El.value = randomPassword;

  // second password
  let randomPassword2 = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword2 += getRandomCharacter();
  }
  pw2El.value = randomPassword2;
}

function copyText() {
  let password = document.getElementById("pw1").value;
  navigator.clipboard.writeText(password).then(function () {
    alert("Copied:" + " " + password);
  });
}

function copyText2() {
  let password2 = document.getElementById("pw2").value;
  navigator.clipboard.writeText(password2).then(function () {
    alert("Copied:" + " " + password2);
  });
}
