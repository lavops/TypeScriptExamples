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