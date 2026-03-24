const str = "abcdb";

const Repeat = (str) => {
    let freq = {};

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (freq[ch] === undefined) {
            freq[ch] = 1;
        } else {
            return ch;
        }
    }
    return null;
}

console.log(Repeat(str));