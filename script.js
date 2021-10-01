// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()?><";
var requirements = 0;

var userSel = []; 
var password = [];

function generatePassword(){
  password = [];
  requirements = 0; 

  let length = prompt("How many characters would you like the password to contain?")
  
  while (length <8) {
    alert("Please enter a number betweeen 8 and 128")
    length = prompt("How many characters would you like the password to contain?")
    while(length >128) {
      alert("Please enter a number between 8 and 128")
      length = prompt("How many characters would you like the password to contain?")
    }
  }
  while(length >128) {
    alert("Please enter a number between 8 and 128")
    length = prompt("How many characters would you like the password to contain?")
    while (length <8) {
      alert("Please enter a number betweeen 8 and 128")
      length = prompt("How many characters would you like the password to contain?")
    }
  }
  
  let upperChar = confirm("Click OK to confirm including uppercase characters.")
  if(upperChar){
    userSel.push(...upper)
    requirements = 1
  }

  let Num1 = confirm("Click OK to confirm including numeric characters.")
  if(Num1){
    userSel.push(...numbers)
    requirements = 1
  }

  let spec = confirm("Click OK to confirm including special characters.")
  if(spec){
    userSel.push(...special)
    requirements = 1
  }

  let low = confirm("Click OK to confirm including lowercase characters.")
  if(low){
    userSel.push(...lower)
    requirements = 1
  }
  
  while (requirements == 0) {
    alert("You must select at least one option on the list")
    length = prompt("How many characters would you like the password to contain?")

    while (length <8) {
      alert("Please enter a number betweeen 8 and 128")
      length = prompt("How many characters would you like the password to contain?")
      while(length >128) {
        alert("Please enter a number between 8 and 128")
        length = prompt("How many characters would you like the password to contain?")
      }
    }
    while(length >128) {
      alert("Please enter a number between 8 and 128")
      length = prompt("How many characters would you like the password to contain?")
      while (length <8) {
        alert("Please enter a number betweeen 8 and 128")
        length = prompt("How many characters would you like the password to contain?")
      }
    }

    upperChar = confirm("Click OK to confirm including uppercase characters.")
    if(upperChar){
      userSel.push(...upper)
      requirements = 1
    }
    Num1 = confirm("Click OK to confirm including numeric characters.")
    if(Num1){
      userSel.push(...numbers)
      requirements = 1
    }
    spec = confirm("Click OK to confirm including special characters.")
    if(spec){
      userSel.push(...special)
      requirements = 1
    }
    low = confirm("Click OK to confirm including lowercase characters.")
    if(low){
      userSel.push(...lower)
      requirements = 1
    }
  }
  console.log(userSel)
    for (let i = 0; i < length; i++){
      password.push(userSel[Math.floor(Math.random() * userSel.length)]);
      console.log(password.join('+'));
    }
  document.getElementById('password').value = password.join("");

}

//prompt the user for the password criteria
//  A. password length between 8-128
//  B. uppercase, lowercase, numbers, special characters

//validate the input
//generate password based on critera






//display generated password in the page
//return "Generated Password Will Go Here"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





