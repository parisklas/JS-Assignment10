//STEP 1

let firstName = window.prompt('What is your first name?');
window.alert('The length of your name is: ' + firstName.length + ' characters.');

//STEP 2
let indexNumber = window.prompt('State a number to get the character at that position.');
let searchName = firstName.charAt(indexNumber);
window.alert("Character at " + indexNumber + "th position is: " + searchName);

//STEP 3
let lastName = window.prompt('What is your last name?');
window.alert('Your name is: ' + firstName + ' ' + lastName);

//STEP 4
const phrase = 'The quick brown fox jumps over the lazy dog';
window.alert('fox is indexed at: ' + phrase.indexOf('f') + ' - ' + phrase.indexOf('x'));

//STEP 5
window.alert("The last instance of the word 'fox' is at index: " + phrase.lastIndexOf('fox'));

//STEP 6
let fullName = window.prompt('What\'s your full name?');
window.alert(phrase.replace('the lazy dog', fullName));

//STEP 7
let userWord = window.prompt('Write a word to search for.');
window.alert(phrase.search(`${userWord}`));


//STEP 8
const old_string = 'The quick brown fox jumps over the lazy dog';
const new_string = old_string.slice(31, 43);
window.alert(new_string.toUpperCase());

//STEP 9
let trimPhrase = '            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
window.alert(trimPhrase.trim().toLowerCase());

//STEP 10
lowercasePhrase = 'the quick brown fox jumps over the lazy dog';
window.alert(phrase.charAt(0).toUpperCase() + phrase.slice(1));