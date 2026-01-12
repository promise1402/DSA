const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const Solution = (n) => {
    originalNumber = n;
    let reversedNumber = 0;
    while(n != 0){
        const digit = n % 10;
        reversedNumber = reversedNumber*10 +digit;
        n = Math.floor(n/10);
    }
    console.log("The reversed number for " + originalNumber + " is: " + reversedNumber);
}

rl.question("Enter the number to reverse: ", function(number){
    const n = parseInt(number);
    Solution(n);
    rl.close();
});