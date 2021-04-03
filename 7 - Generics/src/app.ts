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

function merge<T, U>(objA: T, objB: U) {
    
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max'}, {age: 20}); // as Type
