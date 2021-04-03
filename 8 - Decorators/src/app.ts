function Logger(logString: string) {
    return function(target: Function) {
        console.log(logString);
        console.log(target);
    }
}

@Logger('Logging - Person')
class Person {
    name = 'Example';

    constructor() {
        console.log("Creating person object");
    }
}

const person = new Person();
console.log(person);