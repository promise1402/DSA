let arr = [1 ,0 ,2 ,3 ,0 ,4 ,0 ,1];

const Result = (arr) => {
    let n = arr.length;
    let newArr = [];

    for(let i = 0 ; i < n; i++){
        if (arr[i] !== 0){
            newArr.push(arr[i]);
        }
    }

    while(newArr.length < n){
        newArr.push(0);
    }

    return newArr;
}

const res = Result(arr);

console.log("res :", res);