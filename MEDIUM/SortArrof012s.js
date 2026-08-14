const arr = [1, 0, 2, 1, 0];

const Solution = (arr) => {
    let n = arr.length;

    let cnt0 = 0, cnt1 = 0, cnt2 = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            cnt0++;
        } else if (arr[i] === 1) {
            cnt1++;
        } else if (arr[i] === 2) {
            cnt2++;
        } else {
            return "No required digit"
        }
    }
    let idx = 0;
    while (cnt0 > 0) {
        arr[idx++] = 0;
        cnt0--;
    }

    while (cnt1 > 0) {
        arr[idx++] = 1;
        cnt1--;
    }

    while (cnt2 > 0) {
        arr[idx++] = 2;
        cnt2--
    }

    return arr;

}
console.log(Solution(arr));