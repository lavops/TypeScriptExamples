class Department {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }
}

const accounting = new Department('Accounting');
console.log(accounting);

accounting.describe();

const acountingCopy = {name: 's', describe: accounting.describe};
acountingCopy.describe();
