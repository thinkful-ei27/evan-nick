function createGreeting(name, age) {
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth(age)}`;

}

const nickAndHisAge = createGreeting('Nick', 28);
function yearOfBirth(age) {
    if (age < 0 || typeof age !== 'number'){
        throw new Error("Age cannot be below 0 and must be a number"); 
    } else
    return 2018 - age;
}



try {
 createGreeting('Nick', -5);
} catch(e) {
    console.log(e);
}
