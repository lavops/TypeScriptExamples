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

// OBJECTS, NESTED OBJECTS, ARRAYS, TUPES, ENUMS, ANY

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person: {
    name: string;
    age: number;
    hobbies: string[]
    role: [number, string] // TUPLE TYPE
    something: any,
    details: {
        title: string;
        description: string;
    }
} = {
    name: 'Example',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [Role.ADMIN, Role[0]],
    something: 'Something ' + 1,
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
      }
};

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

// Union Types, Literal Types, Type alias

type CustomType = number | string;
type LiteralType = 'as-number' | 'as-text';

function combine(input1: CustomType, input2: CustomType, resultConversion: LiteralType) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);

// Function Types, Function as Type, Callbacks

function addFunction(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function returnUndefined(): undefined {
    return;
}

printResult(addFunction(5, 12));

let combinedValues: (a: number, b: number) => number;
combinedValues = addFunction;
printResult(combinedValues(5, 12));

function addAndHandle(n1: number, n2: number, cb: (number) => void) {
    const result = n1 + n2;

    cb(result);
} 

addAndHandle(10, 20, printResult);