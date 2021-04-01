"use strict";
let user1;
user1 = {
    username: 'Example',
    age: 10,
    greet(phrase) {
        console.log(phrase + ' ' + this.username);
    }
};
console.log(user1);
user1.greet('Hi I am');
class Person {
    constructor(username) {
        this.username = username;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.username);
    }
}
const person = new Person('Pera');
console.log(person);
person.greet('Hi I am');
let add;
add = (n1, n2) => {
    return n1 + n2;
};
