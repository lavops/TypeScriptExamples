// Const, Let
const username = 'Example';
let myAge = 30;
myAge = 23;

// Arrow funciton with default parameter
const add = (a: number, b: number = 0) => {
    return a + b;
}

console.log(add(2, 5));

const printOutput: (a: number | string) => void = (output: number | string) => console.log(output);
const button = document.querySelector('button');

if(button) {
    button.addEventListener('click', (event) => {
        console.log(event);
    })
}

printOutput(add(2,5));
printOutput(add(1));

// Spread Operator ...
const hobbies = ['sports', 'cooking'];
const activeHobbies = ['hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
    firstname: 'Example',
    age: 30
};

const copiedPerson = {...person}; // BITNO

// Rest Parameters
const addRest = (...numbers: number[]) => {
    let result = 0;
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
}

const addedNumbers = addRest(5, 10, 15, 20);
console.log(addedNumbers);

// Array & Object Destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2, remainingHobbies);

const {firstname: firstname1, age: age1} = person;
console.log(person, firstname1, age1);