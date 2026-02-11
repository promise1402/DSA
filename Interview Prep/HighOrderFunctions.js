const arr = [1, 2, 3, 4, 5];

const doubled = arr.map( num => num * 2 );

console.log(doubled); // Output: [2, 4, 6, 8, 10]

const evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

arr.forEach( num => console.log(num * 2) ); // Output: 2, 4, 6, 8, 10 (each on a new line)

setTimeout(() => {
    console.log("This will be printed after 1 seconds");
}, 1000)