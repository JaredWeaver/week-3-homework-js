// Assignment Code

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var userLength;
var userLowercase;
var userUppercase;
var userSpecial;
var userNumeric;


function promptUser() {
// create variables to store user input()
    userLength = parseInt(prompt("How many characters between 8-128 would you like your password?"));
    while (userLength >= 129 || userLength <= 7 || !userLength || typeof userLength !== "number") {
        alert("Try again! Enter an amount between 8-128");
        userLength = parseInt(prompt("How many characters between 8-128 would you like your password?"));      
    }

    userLowercase = confirm("Click 'OK' to confirm if you would like your Password to contain lowercase characters.");
    userUppercase = confirm("Click 'OK' to confirm if you would like your Password to contain uppercase characters.");
    userSpecial = confirm("Click 'OK' to confirm if you would like your Password to contain special characters.");
    userNumeric = confirm("Click 'OK' to confirm if you would like your Password to contain numeric characters.");

    if (!userLowercase && !userUppercase && !userSpecial && !userNumeric) {
        alert("You need to select at least one parameter to generate a password. Please try again!"); 
        userLowercase = confirm("Click 'OK' to confirm if you would like your Password to contain lowercase characters.");
        userUppercase = confirm("Click 'OK' to confirm if you would like your Password to contain uppercase characters.");
        userSpecial = confirm("Click 'OK' to confirm if you would like your Password to contain special characters.");
        userNumeric = confirm("Click 'OK' to confirm if you would like your Password to contain numeric characters.");
    
    }

}

function generatePassword() {

    promptUser();
    var passwordContent = [];
    var randomPassword= "";

    if (userLowercase) {
        passwordContent = passwordContent.concat(lowercaseCharacters);
    }
    if (userUppercase) {
        passwordContent = passwordContent.concat(uppercaseCharacters);
    }
    if (userSpecial) {
        passwordContent = passwordContent.concat(specialCharacters);
    }
    if (userNumeric) {
        passwordContent = passwordContent.concat(numericCharacters);
    }

    for (var i = 0; i < userLength; i++) {
        randomPassword += passwordContent[Math.floor(Math.random() * passwordContent.length)]
    }
    return randomPassword;    
}

// promptUser();
// generatePassword();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

