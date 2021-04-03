"use strict";
const names = ['Max', 'Manuel'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});
promise.then(data => {
    const newData = data.split(' ');
    console.log(newData);
});
// Creating a Generic Function
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 20 }); // as Type
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi There'));
console.log(countAndDescribe(['Proba', 'Proba']));
// keyof
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Example' }, 'name'));
// Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Example');
textStorage.addItem('Proba');
textStorage.removeItem('Example');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(2);
numberStorage.addItem(3);
numberStorage.removeItem(2);
console.log(numberStorage.getItems());
