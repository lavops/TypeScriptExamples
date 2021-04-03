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
