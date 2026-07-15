let arr = [1, 2, 3, 4, 5];

const Result = (arr) => {
    let newArr = [];

    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    newArr.push(arr[0]);

    return newArr;
}

console.log("the left rotated array is :", Result(arr));

//optimal way 

// let arr = [1, 2, 3, 4, 5];

// const leftRotate = (arr) => {
//     let first = arr[0];

//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1];
//     }

//     arr[arr.length - 1] = first;

//     return arr;
// }

// console.log(leftRotate(arr));