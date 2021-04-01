// Const, Let
const username = 'Example';
let age = 30;
age = 29;

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
    name: 'Example',
    age: 30
};

const copiedPerson = {...person}; // BITNO
