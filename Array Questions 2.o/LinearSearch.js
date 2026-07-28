const arr = [1, 2, 3, 4, 5, 6, 7];
let num = 3;

const result = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n; i ++){
        if (arr[i] == num){
            return i;
        }
    }
    return null;
}

res = result(arr);
console.log("the required index is :", result(arr));