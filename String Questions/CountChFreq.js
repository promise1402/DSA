const str = "djdjdksksksk"

const countChar = (str) => {
    let freq = {};

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (freq[ch] === undefined || freq[ch] === 0) {
            freq[ch] = 1;
        }
        else {
            freq[ch]++;
        }
    }
    return freq;

}

console.log("the frequency count is = ", countChar(str));