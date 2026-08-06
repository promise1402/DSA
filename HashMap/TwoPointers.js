// DSA two pointers questions ⭐

const numbers = [2, 5, 7, 8, 15];
let k = 9;

const Solution = (numbers, k) => {
    let map = new Map();

    for (let i = 0; i < numbers.length; i++) {

        const complement = k - numbers[i];

        if (map.has(complement)) {
            return ([map.get(complement), i]);
        }

        map.set(numbers[i], i);
    }
    return [];
};

console.log("the two indices are :", Solution(numbers, k));