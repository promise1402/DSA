const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

class Solution {
    pattern(n) {
        for(let i = n; i >= 0; i--){
            let row = "";
            for (let j = 1; j <= i; j++){
                row = row + j + " ";
            }
            console.log(row);
        }
    }
}

rl.question("Enter the size of the inverted right pyramid star pattern: ", function(size){
    const n = parseInt(size);
    const sol = new Solution();
    sol.pattern(n);
    rl.close();
})
