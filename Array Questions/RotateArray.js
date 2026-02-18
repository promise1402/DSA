 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 let k = 6;

const rotateArray = (arr, k) => {
    let n = arr.length;

    for (let i = 0; i < k; i++) {

        //left rotate the array by one position
        let temp = arr[0]; // Store the first element
        for (let j = 0; j < n - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[n - 1] = temp;
    }
    return arr; 
}

rotateArray(arr, k);
console.log(arr); // Output: [4, 5, 6, 7, 8, 9, 1, 2, 3]

