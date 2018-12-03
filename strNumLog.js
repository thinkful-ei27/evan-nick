function jediName (firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

console.log(jediName('Nick', 'Justin'));

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

