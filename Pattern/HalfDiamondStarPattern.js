const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const Solution = (n) => {
    for(let i = 0; i < n; i++){
        let row = "";
        for (let j = 0; j <= i; j++){
            row = row + "* ";
        }
        console.log(row);
    }
    for(let i = n-1; i > 0; i--){
        let row = ""; 
        for (let j = 0; j < i; j++){
            row = row + "* ";
        }
        console.log(row);
    }
}

rl.question("Enter the size of the half diamond star pattern: ", function(size){
    const n = parseInt(size);
    Solution(n);
    rl.close();
});