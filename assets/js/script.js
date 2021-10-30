// Assignment code here
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@"];
var passwordLength;
var codes;

function generatePassword() {

    var password = [];

    passwordLength = parseInt(window.prompt("Please choose a length of password between 8 and 128 characters."));
    
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("You need to pick a value between 8 and 128 characters. Try again.");
        return generatePassword();
    } else {
        var confirmLower = window.confirm("Would you like to include lowercase letters?");
        var confirmUpper = window.confirm("Would you like to include uppercase letters?");
        var confirmNumbers = window.confirm("Would you like to include numbers?");
        var confirmSpecial = window.confirm("Would you like to include special characters?");
    }

    if (confirmLower === true && confirmUpper === true && confirmNumbers === true && confirmSpecial === true) {
        codes = lowerCase.concat(upperCase, numbers, symbols);
    } else if (confirmLower === true && confirmUpper === true && confirmNumbers === true) {
        codes = lowerCase.concat(upperCase, numbers);
    } else if (confirmLower === true && confirmUpper === true && confirmSpecial === true) {
        codes = lowercase.concat(upperCase, symbols);
    } else if (confirmLower === true && confirmNumbers === true && confirmSpecial === true) {
        codes = lowerCase.concat(numbers, symbols);
    } else if  (confirmUpper === true && confirmNumbers === true && confirmSpecial === true) {
        codes = upperCase.concat(numbers, symbols);
    } else if (confirmLower === true && confirmUpper === true) {
        codes = lowerCase.concat(upperCase);
    } else if (confirmLower === true && confirmNumbers === true) {
        codes = lowerCase.concat(numbers);
    } else if (confirmLower === true && confirmSpecial === true) {
        codes = lowerCase.concat(symbols);
    } else if (confirmUpper === true && confirmNumbers === true) {
        codes = upperCase.concat(numbers);
    } else if (confirmUpper === true && confirmSpecial === true) {
        codes = upperCase.concat(symbols);
    } else if (confirmNumbers === true && confirmSpecial === true) {
        codes = numbers.concat(symbols);
    } else if (confirmLower === true) {
        codes = lowerCase;
    } else if (confirmUpper === true) {
        codes = upperCase;
    } else if (confirmNumbers === true) {
        codes = numbers;
    } else if (confirmSpecial === true) {
        codes = symbols;
    } else {
        window.alert("You need to pick an option!")
        return generatePassword();
    }

    for (var i = 0; i < passwordLength; i++) {
        var passCodes = codes[Math.floor(Math.random() * codes.length + 1)];
        password.push(passCodes);
    }
    var finalPassword = password.toString();

    writePassword(finalPassword);
    return finalPassword;
}

// Write password to the #password input
function writePassword(finalPassword) {
  document.getElementById("password").innerHTML = finalPassword;
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);