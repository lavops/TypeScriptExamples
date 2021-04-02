"use strict";
const e1 = {
    name: 'Example',
    privilages: ['create-server'],
    startDate: new Date()
};
// Guard Type
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
