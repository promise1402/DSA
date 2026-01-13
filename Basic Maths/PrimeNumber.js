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
    if(divisors.length === 2){
        console.log(n + " is a prime number.");
    }   else{
        console.log(n + " is not a prime number.");
    }
}

rl.question("Enter the number to check for prime: ", function(number){
    const n = parseInt(number);
    Solution(n);
    rl.close();
});