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

const p1 = new Product('Book', 90);
const p2 = new Product('Book 2', 100);

function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjustedDescriptor;
}

class Printer {
    message = "This works!";

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

interface ValidatorConfig {
    [property: string]: {
        [validatableProperty: string]: string[] // ['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...registeredValidators[target.constructor.name][propName], 'required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...registeredValidators[target.constructor.name][propName], 'positive']
    };
}

function Validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig) {
        return true;
    }

    let isValid = true;

    for(const prop in objValidatorConfig) {
        for(const validator of objValidatorConfig[prop]) {
            switch(validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }

    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const title = titleEl.value;
    const priceEL = document.getElementById('price') as HTMLInputElement;
    const price = +priceEL.value;

    const createdCourse = new Course(title, price);
    if (!Validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }

    console.log(createdCourse);
})