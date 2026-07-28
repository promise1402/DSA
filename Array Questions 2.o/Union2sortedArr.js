// find the union of 2 sprted array

const arr1 = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [2,3,4,4,5,11,12];

const result = (arr1, arr2) => {
    let n = arr1.length;
    let m = arr2.length;

    let map = new Map();

    for ( let i = 0; i < n; i++){
        map.set(arr1[i], true);
    }

    for (let j = 0; j < m; j++){
        map.set(arr2[j], true);
    }

    return [...map.keys()];
}

res = result(arr1, arr2);
console.log("the union of 2 sorted array is : ", res);