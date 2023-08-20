//STEP 1

function alphabetize(str) {
    return str.split("")
              .sort()
              .join("");
}

let userStr = window.prompt('Input a string to alphabetize: ');
console.log(alphabetize(userStr));


//STEP 2
function capitalize(sentence) {
  let array = sentence.split(' ');
  let newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  return newArray.join(' ');
}
console.log(capitalize('the quick brown fox'));


//STEP 3
function vowelCounter(str1) {
  const vowelList = 'aeiouAEIOU';
  let vCount = 0;

  for (var x = 0; x < str1.length; x++) {
    if(vowelList.indexOf(str1[x]) !== -1) {
      vCount += 1;
    }
  }
  return vCount;
}

let userVowels = window.prompt('Write a sentence and I\'ll count how many vowels are present:');
console.log(vowelCounter(userVowels));

//STEP 4
function makeid(l)
{
var text = "";
var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{
text += charList.charAt(Math.floor(Math.random() * charList.length));
}
return text;
}
console.log(makeid(8));

//STEP 5
function longestCountryName(countryName)
  {
  return countryName.reduce(function(lname, country)
  {
    return lname.length > country.length ? lname : country;
  },
"");
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

