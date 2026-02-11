const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const Solution = (string) => {
    const isPalindrome = (left, right) => {
        if(left >= right) return true;  
        if(string[left] !== string[right]) return false;
        return isPalindrome(left + 1, right - 1);
    };
    return isPalindrome(0, string.length - 1);
}

rl.question("enter the string: ", function(string){
    console.log("Is the string a palindrome? " + Solution(string));
    rl.close();
});