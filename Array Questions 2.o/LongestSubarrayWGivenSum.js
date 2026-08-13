let n = 15;
const arr = [10, 5, 2, 7, 1, 9];

const Solution = (arr, n) => {
    let map = new Map();

    let sum = 0;
    maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        //if subarray starts form index 0
        if (sum === n) {
            maxLen = i + 1;
        }

        //if subarry starts after 0
        const rem = sum - n;
        if (map.has(rem)) {
            const len = i - map.get(rem);
            maxLen = Math.max(maxLen, len);
        }

        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return maxLen;
}

console.log(Solution(arr, n));