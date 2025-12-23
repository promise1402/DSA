const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

class Solution {
    pattern(n) {
        for(let i = 1; i <= n; i++){
            let row = "";
            for(let j = 1; j <= i; j++){
                row = row + i+" ";
            }
            console.log(row);
        }
    }
}

rl.question ("Enter the size of the right-angled number pyramid pattern: ", function(size){
    const n= parseInt(size);

    const sol = new Solution();
    sol.pattern(n);
    rl.close();
})
