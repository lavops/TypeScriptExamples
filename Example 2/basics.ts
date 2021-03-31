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
const printResult: boolean = true;
const resultPhrase: string = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);

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