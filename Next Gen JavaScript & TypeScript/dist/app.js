"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Const, Let
var username = 'Example';
var age = 30;
age = 29;
// Arrow funciton with default parameter
var add = function (a, b) {
    if (b === void 0) { b = 0; }
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
printOutput(add(1));
// Spread Operator ...
var hobbies = ['sports', 'cooking'];
var activeHobbies = ['hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
var person = {
    name: 'Example',
    age: 30
};
var copiedPerson = __assign({}, person); // BITNO
