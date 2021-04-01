// Class, Abstract, THIS, 
abstract class Department {
    
    //public name: string;
    static fiscalYear: number = 2020;
    private readonly boss: string = 'BOSS';
    protected employees: string[] = [];

    constructor(private id: string, public name: string) {
    }

    static createEmployee(name: string) {
        return {name: name};
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmpolyeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

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

    constructor(id: string, public admins: string[]) {
        super(id,'IT');
    }

    describe() {
        console.log("IT DEPARTMENT");
    }
}

const admins = ['pera', 'zika'];
const it = new ITDepartment('d2', admins);
console.log(it);

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance;
        }

        this.instance = new AccountingDepartment('d1', []);
        return this.instance;
    }

    describe() {
        console.log("ACCOUNTING DEPARTMENT");
    }

    addReport(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }

    printReports() {
        console.log(this.reports);
    }

    addEmployee(employee: string) {
        if(employee === 'Pera') {
            return;
        }
        this.employees.push(employee);
    }

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        
        throw new Error('No report found!');
    }

    set mostRecentReport(value: string) {
        if(!value) {
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