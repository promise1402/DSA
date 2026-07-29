//find the missing no.

const arr = [8, 2, 4, 5, 3, 7, 1];

const result = (arr) => {
    let n = arr.length + 1;
    let totalsum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    let missingNo = totalsum - actualSum;
    return missingNo;
}

console.log(result(arr));