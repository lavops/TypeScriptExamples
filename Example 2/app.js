// Function Types, Function as Type, Callbacks
function addFunction(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function returnUndefined() {
    return;
}
printResult(addFunction(5, 12));
var combinedValues;
combinedValues = addFunction;
printResult(combinedValues(5, 12));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, printResult);
