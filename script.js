// Create a Random Hex color generator
const form = document.getElementById('app-form');
const formInput = document.getElementById('textField');
const result = document.querySelector('.result');

function checkPalindrome(e) {

  e.preventDefault();
  if(formInput.value === '') {
    result.innerHTML = `<strong>Please type in a word.</strong>`;
    return;
  }
  const inputValue = formInput.value;
  let newInput = inputValue.split('').reverse().join('');
  if(newInput.toLowerCase() === inputValue.toLowerCase()) {
    result.innerHTML = `${inputValue} is a Palindrome`;
  } else {
    result.innerHTML = `${inputValue} is not Palindrome`;
  }

}

form.addEventListener('submit', checkPalindrome);