class Department {
    
    //public name: string;
    private readonly boss: string = 'BOSS';
    private employees: string[] = [];

    constructor(private id: string, public name: string) {
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name} - Boss: ${this.boss}`);
    }

    addEmployee(employee: string) {
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