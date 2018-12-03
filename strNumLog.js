//Jedi Name
function jediName (firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

console.log(jediName('Nick', 'Justin'));

//And Beyond!

function beyond (num) {
    if (num === Infinity || num === Number.NEGATIVE_INFINITY) {
        console.log('And beyond');
    } else if (num > 0 ) {
        console.log('to infinity')
    } else if (num < 0) {
        console.log('to negative infinity');
    } else if (num === 0) {
        console.log('staying home')
    }    
}

//Cracking the Code
function decode(word){
    if(word.charAt(0) === 'a'){
      return word.charAt(1);
    } else if(word.charAt(0) === 'b'){
      return word.charAt(2);
    } else if(word.charAt(0) === 'c'){
      return word.charAt(3);
    } else if(word.charAt(0) === 'd'){
      return word.charAt(4);
    }
}

//How many days in a month
function howManyDaysInAMonth(months, leapYear){
  let numDays; 
    switch(months){
      case 'January':
        numDays = 31;
        break;
      case 'February':
        if(leapYear === false){
          numDays = 28;
        } else numDays = 29;
        break;
      case 'March':
        numDays = 31;
        break;
      case 'April':
        numDays = 30;
        break;
      case 'May':
        numDays = 31;
        break;
      case 'June':
        numDays = 30;
        break;
      case 'July':
        numDays = 31;
        break;
      case 'August':
        numDays = 31;
        break;
      case 'September':
        numDays = 30;
        break;
      case 'October':
        numDays = 31;
        break;
      case 'November':
        numDays = 30;
        break;
      case 'December':
        numDays = 31;
        break;
    }
    return `${months} has ${numDays} days.`;
}