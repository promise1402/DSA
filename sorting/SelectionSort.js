arr = [9, 12, 18, 11, 13, 15];

const selectionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i< n-1; i++){
        let minIndx = i;

        for (let j =i+1; j < n; j++){
            if (arr[j] < arr[minIndx]){
                minIndx=j;
            }
        }
        
        if (minIndx !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndx];
            arr[minIndx] = temp;
        }
    }
    return arr;
}

console.log("Sprted arr", selectionSort(arr));