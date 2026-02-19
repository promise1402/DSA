let arr = [0, 1, 0, 1, 1, 1, 1];

const maxConsecutiveOnes = (arr) => {
    let n = arr.length;
    let maxCount = 0;
    let count = 0;

    for (let i = 1; i < n; i++) {
        if (arr[i] === arr[i - 1]){
            count++;
        }
        else {
            maxCount = Math.max(maxCount,count);
            count = 1;

        }
    }
    return Math.max(maxCount, count);
}

console.log(maxConsecutiveOnes(arr));

// explaination: The function `maxConsecutiveOnes` takes an array of 0s and 1s as input and calculates the maximum number of
// consecutive 1s in the array. It iterates through the array, counting consecutive 1s and updating the maximum count whenever
// a change from 1 to 0 is encountered. Finally, it returns the maximum count of consecutive 1s found in the array.