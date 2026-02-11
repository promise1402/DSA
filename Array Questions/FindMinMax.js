let arr = [3, 5, 1, 8, 2, 9, 4];

let min, max;
let i = 0;

// if array length is even
if(arr.length % 2 === 0) {
    if(arr[0] < arr[1]) {
        min = arr[0];
        max = arr[1];
    } else {
        min = arr[1];
        max = arr[0];
    }
    i = 2; // start from the third element
}
// if array length is odd
else {
    min = max = arr[0];
    i = 1; // start from the second element
}

//comparing elements in pairs
while(i < arr.length - 1) {
    if(arr[i] < arr[i + 1]) {
        if(arr[i] < min) min = arr[i];
        if(arr[i + 1] > max) max = arr[i + 1];
    } else {
        if(arr[i + 1] < min) min = arr[i + 1];
        if(arr[i] > max) max = arr[i];kk
    }
    i += 2; // move to the next pair
}
console.log("Min:", min, "Max:", max);

/*
With using reduce method

let arr = [3, 5, 1, 8, 2, 9, 4];

let min = arr.reduce((a, b) => a < b ? a : b);
let max = arr.reduce((a, b) => a > b ? a : b);

console.log("Min:", min);
console.log("Max:", max);
*/