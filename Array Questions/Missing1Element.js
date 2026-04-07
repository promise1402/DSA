const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

const MissingArr = (arr) => {

    let n = arr.length;

    // let sum = arr.reduce((acc, sum) => acc + sum, 0);
    let actualsum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        actualsum = actualsum + arr[i];
    }

    let expectedsum = (n * (n + 1)) / 2;

    return (expectedsum - actualsum);
}

console.log("Missing no is :", MissingArr(arr));