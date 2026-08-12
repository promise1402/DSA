const arr = [2, 3, 5, 4, 5, 3, 4];

const Result = (arr) => {
    const map = new Map();

    for (const n of arr) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }

    for (const [key, val] of map) {
        if (val === 1) {
            return key;
        }
    }
};

console.log(Result(arr));