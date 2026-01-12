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

    if(originalNumber === reversedNumber){
        console.log(originalNumber + " is a palindrome.");
    }   else{
        console.log(originalNumber + " is not a palindrome.");
    }           

}

rl.question("Enter the number to check for palindrome: ", function(number){
    const n = parseInt(number);
    Solution(n);
    rl.close();
});