const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const Solution = (n) => {
    const originalNumber = n;
    let sum = 0;
    const noOfDigits = n.toString().length;

    while(n > 0) {
        const digit = n % 10;
        sum = sum + Math.pow(digit, noOfDigits);
        n = Math.floor(n / 10);
    }
    if (sum === originalNumber) { 
        console.log(originalNumber + " is an Armstrong number.");
    }   else {
        console.log(originalNumber + " is not an Armstrong number.");
    }
}

rl.question("Enter the number to check for Armstrong: ", function(number){
    const n = parseInt(number);
    Solution(n);
    rl.close();
});