"use strict";
var username = 'Example';
var age = 30;
age = 29;
var add = function (a, b) {
    return a + b;
};
console.log(add(2, 5));
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) {
        console.log(event);
    });
}
printOutput(add(2, 5));
