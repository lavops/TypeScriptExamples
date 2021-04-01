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
const example = new Department('d1', 'EXAMPLE DEPARMTENT');
console.log(example);
example.describe();
example.addEmployee('Pera');
example.addEmployee('Zika');
example.printEmpolyeeInformation();
// Inheritance, Overriding
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const admins = ['pera', 'zika'];
const it = new ITDepartment('d2', admins);
console.log(it);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employee) {
        if (employee === 'Pera') {
            return;
        }
        this.employees.push(employee);
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found!');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Erorr!');
        }
        this.addReport(value);
    }
}
const accounting = new AccountingDepartment('d3', []);
accounting.addReport('Not Error...');
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'New Report';
console.log(accounting);
accounting.addEmployee('Pera');
accounting.addEmployee('Zika');
accounting.printEmpolyeeInformation();
