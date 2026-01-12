const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const Solution = (n) => {
    const orginalNumber = n;
    let count = 0;
    while(n != 0){
        n = Math.floor(n / 10);
        count++;
    }
    console.log("The no. of digit in " + orginalNumber + " is " + count);
}

rl.question("Enter the number to count digits: ", function(number){
    const n = parseInt(number);
    Solution(n);
    rl.close();
});