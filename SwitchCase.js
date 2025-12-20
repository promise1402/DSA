const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})

rl.question("enter a number between 1 to 7: ", function(num){
    num = parseInt(num);
    switch(num){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
            default:
            console.log("Invalid input! Please enter a number between 1 to 7.");
    }
    rl.close();
})