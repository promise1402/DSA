const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function Solution(n) {
    for(let i = 0; i < n; i++){
        let row = "";
        for (let j = 0; j < n-i-1; j++){
            row = row + "  ";
        }
        for (let j = 0; j < 2*i+1; j++){
            row = row + "* ";
        }
        console.log(row);
    }
    for(let i = 0; i < n; i++){
        let row = "";
        for (let j = 0; j < i; j++){
            row = row + "  ";
        }
        for (let j = 0; j < 2*n-(2*i+1); j++){
            row = row + "* ";
        }
        console.log(row);
    }
}

rl.question("Enter the size of the diamond star pattern: ", function(size){
    const n = parseInt(size);
    Solution(n);
    rl.close();
});