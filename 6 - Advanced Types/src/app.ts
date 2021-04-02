type Admin = {
    name: string;
    privilages: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Example',
    privilages: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type Guards 
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') { // Type Guard
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin; // Moze da prihvati i ElevatedEmployee

function printEmployeeInformation(employee: UnknownEmployee) { // Moze da prihvati i ElevatedEmployee
    console.log(employee.name);
    if('privilages' in employee) {
        console.log(employee.privilages);
    }
    if('startDate' in employee) {
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

    loadCargo(amount: number) {
        console.log('Loading cargo ... ' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(10);
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

moveAnimal({type: 'horse', runningSpeed: 10});
moveAnimal({type: 'bird', flyingSpeed: 15});

// Type Casting
// ILI <HTMLInputElement>EXAMPLE ili EXAMPLE as HTMLInputElement

const userInput = document.getElementById('input'); 
if(userInput){
    (userInput as HTMLInputElement).value = 'Hi there!';
}

