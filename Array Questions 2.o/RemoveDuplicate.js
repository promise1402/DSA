let arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4];

const Unique = (arr) => {
    let uniqueArr = [];
    n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] !== arr[i + 1]) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

const res = Unique(arr);
console.log(res);