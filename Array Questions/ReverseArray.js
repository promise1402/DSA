let arr = [1, 2, 3, 4, 5];

let left = 0;
let right = arr.length - 1;

while(left < right) {
    // Swap elements
    // [arr[left], arr[right]] = [arr[right], arr[left]];

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}

console.log(arr);