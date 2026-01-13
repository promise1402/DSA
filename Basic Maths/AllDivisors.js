const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const Solution = (n) => {

    let divisors = [];
    for (let i = 1; i <= n; i++){
        if(n % i === 0){
            divisors.push(i);
        }
    }
    console.log("The divisors of " + n + " are: " + divisors.join(", "));
}

rl.question("Enter the number to find all divisors: ", function(number){
    const n = parseInt(number);
    Solution(n);
    rl.close();
});