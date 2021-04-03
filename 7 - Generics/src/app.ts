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