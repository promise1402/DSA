const arr = [5, 1, 4, 2, 3, 12, 1, 3, 4, 5];

const Solution = (arr) => {

    let map = new Map();
    for (let num of arr) {
        if (map.has(num)) {
            const currentCount = (map.get(num));
            map.set(num, currentCount + 1);
        } else {
            map.set(num, 1);
        }
    }
    return map;
}

console.log(Solution(arr));