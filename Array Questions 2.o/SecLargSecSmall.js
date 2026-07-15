let arr = [2, 5, 7, 8, 4, 3, 1];
n = arr.length;

const findValue = (arr) => {

    if (n === 0 || n === 1) {
        console.log(-1, -1);
        return;
    }

    let arrSort = [...arr].sort((a, b) => a - b);

    let secondSmallest = arrSort[1];
    let secondLargest = arrSort[arrSort.length - 2];

    return {
        secondSmallest,
        secondLargest
    }

}

const result = findValue(arr);

console.log("sec smallest :", result.secondSmallest);
console.log("sec Largest :", result.secondLargest);

//time complexity : O(N log N),for sorting the array
//space complexity : O(1), as we are using a constant amt of space for variables