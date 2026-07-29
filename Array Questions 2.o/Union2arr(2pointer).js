// find the union of 2 sorted array (using 2 pointer approach)

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

const result = (arr1, arr2) => {
    let n = arr1.length;
    let m = arr2.length;

    let i = 0;
    let j = 0;

    let union = [];

    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
                union.push(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[i]) {
            if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
                union.push(arr2[j]);
            }
            j++;
        } else {
            if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
                union.push(arr1[i]);
            }
            i++;
            j++;
        }
    }

    //remaining elements of arr1
    while (i < n) {
        if (union[union.length - 1] !== arr1[i]) {
            union.push(arr1[i]);
        }
        i++;
    }

    //remaining elements of arr2
    while (j < m) {
        if (union[union.length - 1] !== arr2[j]) {
            union.push(arr2[j]);
        }
        j++;
    }

    return union;
}

console.log(result(arr1, arr2));
