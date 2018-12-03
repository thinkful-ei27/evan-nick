function createGreeting (name, age) {  
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth(age)}`;

}

const nickAndHisAge = createGreeting('Nick', 28);
function yearOfBirth (age) {
   return 2018 - age;  
}

console.log(greeting);

