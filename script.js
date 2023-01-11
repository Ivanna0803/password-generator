// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to validate user password options
function isValidPasswordOptions(len, isLower, isUpper, isNumeric, isSpecial) {
  const errorMsgLen = document.querySelector('#err_len');
  const errorMsgCheck = document.querySelector('#err_check');

  // If password more than 64 characters shows error message
  if (len > 64) {
    errorMsgLen.textContent  = 'Password too long'
    return false;
  } 
  
  // If password less than 10 characters shows error message
  else if (len < 10) { 
    errorMsgLen.textContent = 'Password too short'
    return false;
  }

  // If password lenght is valid removing error message
  else {
    errorMsgLen.textContent = '';
  }

  // If nothing choosed shows error message
  if(isLower + isUpper + isNumeric + isSpecial === 0){
    errorMsgCheck.textContent  = 'Choose at least one type of characters'
    return false;
  }

  // If all is valid removing error message
  else {
   errorMsgCheck.textContent = '';
  }
  return true;
}

// Function to prompt user for password options
function getPasswordOptions() {
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Getting random number from 0 to max index (arr.length - 1)
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

// Function to generate password with user input
function generatePassword() {
  // Getting password length from input field as string
  let lenght = document.querySelector('#lenght').value;
  // Converting string to int
  lenght = parseInt(lenght);

  //Get the inputs from html
  const lower = document.querySelector('#lower').checked;
  const upper = document.querySelector('#upper').checked;
  const numeric = document.querySelector('#numeric').checked;
  const special = document.querySelector('#special').checked;

  if (!isValidPasswordOptions(lenght, lower, upper, numeric, special)) {
    return "";
  }

  const characterArrays = [];

  if (lower == true) {
    characterArrays.push(lowerCasedCharacters);
  }

  if (upper == true) {
    characterArrays.push(upperCasedCharacters);
  }

  if (numeric == true) {
    characterArrays.push(numericCharacters);
  }

  if (special == true) {
    characterArrays.push(specialCharacters);
  }

  let password = '';

  // Generate password 
  for(let i = 0; i < lenght; i++){
    const chars = getRandom(characterArrays);
    password += getRandom(chars);
  }

  return password;
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);