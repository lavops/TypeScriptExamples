"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //public name: string;
        this.boss = 'BOSS';
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name} - Boss: ${this.boss}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmpolyeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('d1', 'Accounting');
console.log(accounting);
accounting.describe();
accounting.addEmployee('Pera');
accounting.addEmployee('Zika');
accounting.printEmpolyeeInformation();
