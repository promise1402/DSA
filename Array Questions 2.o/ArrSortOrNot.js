let arr = [1, 2, 3, 6, 5];

const findRes = (arr) => {
    let n = arr.length;

    for (let i =0; i < n -1 ; i++){
        if(arr[i]<arr[i+1]){
            continue;
        } else {
            return ("array is not sorted");
        }
    }

    return ("array is sorted");

}

console.log(findRes(arr));