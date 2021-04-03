const names: Array<string> = ['Max', 'Manuel'];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then(data => {
    const newData = data.split(' ');
    console.log(newData);
})

// Creating a Generic Function

function merge<T extends object, U extends object>(objA: T, objB: U) {
    
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max'}, {age: 20}); // as Type
console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if(element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements';
    }

    return [element, descriptionText];
}

console.log(countAndDescribe('Hi There'));
console.log(countAndDescribe(['Proba', 'Proba'])); 

// keyof

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Example'}, 'name'));

// Generic Classes

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Example');
textStorage.addItem('Proba');
textStorage.removeItem('Example');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(2);
numberStorage.addItem(3);
numberStorage.removeItem(2);
console.log(numberStorage.getItems());
