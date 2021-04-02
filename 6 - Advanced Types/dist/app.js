"use strict";
const e1 = {
    name: 'Example',
    privilages: ['create-server'],
    startDate: new Date()
};
// Type Guards 
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
const erroBag = {
    error: 'Not A Valid email'
};
