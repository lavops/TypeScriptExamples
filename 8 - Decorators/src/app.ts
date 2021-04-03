function Logger(logString: string) {
    console.log("LOGGER FACTORY");
    return function(target: Function) {
        console.log(logString);
        console.log(target);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log("TEMPLATE FACTORY");
    return function(constructor: any) {
        console.log("Rendering template...");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}
@Logger('Logging - Person')
@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
    name = 'Example';

    constructor() {
        console.log("Creating person object");
    }
}

const person = new Person();
console.log(person);