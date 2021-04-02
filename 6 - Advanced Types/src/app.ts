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