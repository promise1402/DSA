const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const Solution = (n) => {
    if(n === 0) return;
    console.log(n);
    Solution(n-1);
}

rl.question("Enter the number: ", function(number){
    const n = parseInt(number);
    Solution(n);
    rl.close();
});