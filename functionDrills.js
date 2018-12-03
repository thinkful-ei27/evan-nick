function createGreeting(name, age) {
    if(name === undefined || age === undefined){
        throw new Error('Arguments not valid');
    }
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth(age)}`;
}

function yearOfBirth(age) {
    if (age < 0 || typeof age !== 'number'){
        throw new Error("Age cannot be below 0 and must be a number"); 
    } else
    return 2018 - age;
}



try {
 createGreeting();
} catch(e) {
    console.log(e);
}
