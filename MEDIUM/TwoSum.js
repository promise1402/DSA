const arr = [2, 6, 5, 8, 11];
let n = 14;

const Solution = (arr, n) => {
    let l = arr.length;
    let sum = 0;

    for (let i = 0; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            sum = arr[i] + arr[j];
            if (sum === n) {
                return true;
            }
        }
    }
    return false;
}

console.log(Solution(arr, n));