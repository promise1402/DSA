const arr = [3, 7, 2, 9, 5];

const max = (arr) => {
    let n = arr.length;
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(max(arr));