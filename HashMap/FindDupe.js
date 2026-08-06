const arr = [1, 2, 3, 1];

const Solution = (arr) => {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (map.has(num)) {
            return true; //Dupe found
        }
        map.set(num, i);
    }
    return false;
}

console.log(Solution(arr));