const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const Solution = (n,name) => {
    if(n === 0) return;
    console.log(name);
    Solution(n-1,name);
}

rl.question("Enter your name: ", function(name){
    rl.question("Enter the number of times to print your name: ", function(number){
    const n = parseInt(number); 
    Solution(n,name);
    rl.close();
    });
});