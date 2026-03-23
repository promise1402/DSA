let str = "madam";

const reverseString = (str) => {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    if (str.toLowerCase() === reversed.toLowerCase()) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
};

console.log(reverseString(str));