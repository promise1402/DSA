const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
}); 

const Solution = (n) => {
    for(let i = 0; i < n; i++){
        let row = "";   
        for (let j = 0; j <= i; j++){
            let start = (i % 2 === 0) ? 1 : 0;
            row = row + ((start + j) % 2) + " ";
        }
        console.log(row);
    }
}

rl.question("Enter the size of the binary number triangle pattern: ", function(size){
    const n = parseInt(size);
    Solution(n);
    rl.close();
});