const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const Solution = (arr) => {
    const reverseArray = (left, right) => {
        if(left >= right) return;
        // Swap elements
        [arr[left], arr[right]] = [arr[right], arr[left]];
        //recursive call for next pair
        reverseArray(left + 1, right - 1);
    };
    reverseArray(0, arr.length - 1);
    console.log("Reversed Array: " + arr.join(" "));
}

rl.question("Enter the elements of array (space separated): ", function(array){
    const arr = array.split(" ").map(Number);
    Solution(arr);
    rl.close();
});