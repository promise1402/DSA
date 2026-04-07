arr = [12, 35, 1, 10, 34, 18];

const even = arr.filter(i => i % 2 === 0);
const odd = arr.filter(i => i % 2 !== 0);

const lessThan20 = arr.filter(i => i < 20);
const greaterThan20 = arr.filter(i => i > 20);

console.log("Even: ", even);
console.log("odd: ", odd);

console.log("less then 20: ", lessThan20);
console.log("greater than 20: ", greaterThan20);