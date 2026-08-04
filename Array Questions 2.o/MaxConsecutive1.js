const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1];

const result = (arr) => {
    let n = arr.length;

    let count = 0; // for counter
    let maxStreak = 0; //for storing the streak

    for (let i = 0; i < n; i++) {
        if (arr[i] === 1) {
            count++;
        } else {
            count = 0;
        }
        maxStreak = Math.max(maxStreak, count);
    }

    return maxStreak;
}

console.log("The maximum streak is :", result(arr));