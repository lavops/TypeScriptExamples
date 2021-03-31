// NUMBERS, STRINGS, BOOLEANS

function add(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
    if(typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorect input');
    }
    const result = n1 + n2;
    if(showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return n1 + n2;
    }
}

const number1: number = 5;
const number2: number = 2.8;
const printResultVariable: boolean = true;
const resultPhrase: string = "Result is: ";

const result = add(number1, number2, printResultVariable, resultPhrase);