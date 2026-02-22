const string = "Promorp";

const Palindrome = (string) => {
    const reversed = string.split('').map ((char) => char.toLowerCase()).reverse().join('');

    if (string.toLowerCase() === reversed) {
        console.log(" is palindrome")
    } else {
        console.log(" is not palindrome")
    }
} 

Palindrome(string);