const arr = [1, 2, 3, 4, 5, 6, 7];
let k = 2;

const Result = (arr, k) => {

    

    let newArr = [];
    for (let i = k; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    for (let j = 0; j < k; j++) {
        newArr.push(arr[j]);
    }

    return newArr;
}

const res = Result(arr, k)
console.log("the new array with " + k + " rotation is : " + res);
