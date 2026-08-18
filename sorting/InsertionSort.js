const arr = [7, 4, 1, 5, 3];

const Solution = (arr) => {
    let n = arr.length;

    for (let i = 1; i < n; i++) {

        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;

    }

    return arr;
}

console.log(Solution(arr));