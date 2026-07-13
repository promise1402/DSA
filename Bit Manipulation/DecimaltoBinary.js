let num = 1;

const DectoBin = (num) => {
    if (num === 0)
        return 0;
    let res = "";
    while (num > 0) {
        if (num % 2 === 1) {
            res = res + "1";
        }
        else {
            res = res + "0";
        }
        num = Math.floor(num / 2);
    }
    return res.split('').reverse().join('');
}

console.log("The binary  no. for " + num + " is: " + DectoBin(num));