//STEP 1
const num = window.prompt('Pick a number, any number');
console.log(Math.abs(num));

//STEP 2
const roundUp = window.prompt('Pick any decimal number to round up');
console.log(Math.ceil(roundUp));

//STEP 3
const roundDown = window.prompt('Pick any decimal number to round down');
console.log(Math.floor(roundDown));

//STEP 4
const fiveNum = window.prompt('Pick 5 numbers, separated by a comma (,)');
console.log(`The highest number was: ${Math.max(fiveNum)}`);
console.log('The lowest number was: ' + Math.min(fiveNum));

//STEP 5
const squareRoot = window.prompt('Find the square root of any number:');
console.log(Math.sqrt(squareRoot));