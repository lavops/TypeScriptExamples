"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
const acountingCopy = { name: 's', describe: accounting.describe };
acountingCopy.describe();
