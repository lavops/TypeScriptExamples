const username = 'Example';
let age = 30;
age = 29;

const add = (a: number, b: number) => {
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