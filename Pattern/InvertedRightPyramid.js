const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

class Solution {
    pattern(n) {
        for(let i = 0; i < n; i++){
            let row = "";
            for (let j = n; j > i; j--){
                row = row + "* ";
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
