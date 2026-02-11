const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const Solution = (n) => {
    if(n === 0) return 1;
    return n * Solution(n-1);
}

rl.question("Enter the number: ", function(number){
    const n = parseInt(number);
    console.log("Factorial of " + n + " is: " + Solution(n));
    rl.close();
});