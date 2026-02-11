const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const Solution = (n) => {
    if(n === 0) return 0;
    return n + Solution(n-1);
}

rl.question("Enter the number: ", function(number){
    const n = parseInt(number);
    console.log("Sum of 1 to " + n + " is: " + Solution(n));
    rl.close();
});