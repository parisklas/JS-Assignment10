//STEP 1
function daysInMonth(month) {
    switch(month) {
      case 'January':
        return 31;
      case 'February':
        return 28;
      case 'March':
        return 31;
      case 'April':
        return 30;
      case 'May':
        return 31;
      case 'June':
        return 30;
      case 'July':
        return 31;
      case 'August':
          return 31;
      case 'September':
          return 30;
      case 'October':
          return 31;
      case 'November':
          return 30;
      case 'December':
          return 31;
    }
};

let userMonth = window.prompt('How many days in a month? Write a month:');
console.log(daysInMonth(userMonth));

//STEP 2
var monthName = function(dt){
  mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return mlist[dt.getMonth()];
  };
  console.log(monthName(new Date("10/11/2009")));
  console.log(monthName(new Date("11/13/2014")));


//STEP 3

//STEP 4

//STEP 5
