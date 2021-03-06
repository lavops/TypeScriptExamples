"use strict";
var _a;
const e1 = {
    name: 'Example',
    privilages: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { // Type Guard
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(employee) {
    console.log(employee.name);
    if ('privilages' in employee) {
        console.log(employee.privilages);
    }
    if ('startDate' in employee) {
        console.log(employee.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log('Driving a car...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ... ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            console.log('Moving with speed: ' + speed);
            break;
        case 'horse':
            speed = animal.runningSpeed;
            console.log('Moving with speed: ' + speed);
            break;
        default:
            break;
    }
}
moveAnimal({ type: 'horse', runningSpeed: 10 });
moveAnimal({ type: 'bird', flyingSpeed: 15 });
// Type Casting
// ILI <HTMLInputElement>EXAMPLE ili EXAMPLE as HTMLInputElement
const userInput = document.getElementById('input');
if (userInput) {
    userInput.value = 'Hi there!';
}
// Property mora da bude string kao i vrednost
const erroBag = {
    error: 'Not A Valid email',
    username: 'Must start with a capital character'
};
// Optional Chaining
const FetchedUserData = {
    id: 'u1',
    name: 'Example',
    job: { title: 'CEO' }
};
console.log((_a = FetchedUserData === null || FetchedUserData === void 0 ? void 0 : FetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// Nullish
const userInputExample = '';
const storedData = userInputExample || 'DEFAULT';
console.log(storedData);
