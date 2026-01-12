const { read } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

const Solution = (a,b) => {
    let gcd = 1;
    const min = Math.min(a,b);

    for (let i = 1; i <= min; i++){
        if(a % i === 0 && b % i === 0){
            gcd = i;
        }
    }
    console.log("The GCD of " + a + " and " + b + " is: " + gcd);
    return gcd;
}

rl.question("Enter the first number: ", function(firstNumber){
    rl.question("Enter the second number: ", function(secondNumber){
        const a = parseInt(firstNumber);
        const b = parseInt(secondNumber);
        Solution(a,b);
        rl.close();
    });
});
