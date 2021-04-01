interface IPerson {
    username: string;
    age: number;

    greet(phrase: string): void;
}

let user1: IPerson;
user1 = {
    username: 'Example',
    age: 10,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.username);
    }
};

console.log(user1);
user1.greet('Hi I am');

interface Named {
    readonly username: string;
    lastname?: string;
}

interface Greetable extends Named {
    //readonly username: string;
    greet(phrase: string): void;
}

class Person implements Greetable {
    
    username: string;

    constructor(username: string) {
        this.username = username;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.username);
    }
}

const person = new Person('Pera');
console.log(person);
person.greet('Hi I am');

// Interface as function
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}