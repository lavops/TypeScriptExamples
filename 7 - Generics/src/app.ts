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

