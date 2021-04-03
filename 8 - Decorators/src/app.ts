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

// Property Decorator
function Log(target: any, propertyName: string) {
    console.log('Property decorator...');
    console.log(target, propertyName);
}

// Accessor Decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator...');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// Method Decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator...');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// Parameter Decorator
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator...');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    @Log
    title: string;
    private _price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @Log2
    set price(value: number) {
        if(value > 0){
            this._price = value;
        }
        else {
            throw new Error('Invalid price - should be positive');
        }
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}
