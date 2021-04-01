"use strict";
// Class, Abstract, THIS, 
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.boss = 'BOSS';
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmpolyeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
//public name: string;
Department.fiscalYear = 2020;
//const example = new Department('d1', 'EXAMPLE DEPARMTENT');
//console.log(example);
//
//example.describe();
//
//example.addEmployee('Pera');
//example.addEmployee('Zika');
//
//example.printEmpolyeeInformation();
// Inheritance, Overriding, Getter/Setter, Static Property & Methods, 
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log("IT DEPARTMENT");
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
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d1', []);
        return this.instance;
    }
    describe() {
        console.log("ACCOUNTING DEPARTMENT");
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
const accounting = AccountingDepartment.getInstance();
accounting.addReport('Not Error...');
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'New Report';
console.log(accounting);
accounting.addEmployee('Pera');
accounting.addEmployee('Zika');
accounting.printEmpolyeeInformation();
const employee1 = Department.createEmployee('Proba');
console.log(employee1, Department.fiscalYear);
