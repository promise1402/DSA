arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];

const removeduplicate = (arr) => {
    let s = new Set();

    let index = 0;

    for (let i = 0; i < arr.length; i++){
        if(!s.has(arr[i])){
            s.add(arr[i]);
            arr[index++] = arr[i];
        }
    }
    return index;
}

const newSize = removeduplicate(arr);

console.log(arr.slice(0,newSize).join(" "));