const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const Solution = (n) => {
    for(let i = 1; i <= n; i++){
        let row = "";
        for (let j = 1; j <= i; j++){
            row = row + j;
        }
        for (let j = (2*(n-i)); j >= 1; j--){
            row = row + " ";
        }
        for (let j =i; j >= 1; j--){
            row = row + j;
        }
        console.log(row);
    }
}

rl.question("Enter the size of the number crown pattern: ", function(size){
    const n = parseInt(size);
    Solution(n);
    rl.close();
});