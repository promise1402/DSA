let s1 = "sgeek";
let s2 = "geeks";

const Anagram = (s1, s2) => {
    if (s1.length !== s2.length) {
        return "Not anagram";
    }

    let counts1 = {};
    let counts2 = {};

    for (let i = 0; i < s1.length; i++) {
        let ch1 = s1[i];
        if (counts1[ch1] === undefined) {
            counts1[ch1] = 1;
        } else {
            counts1[ch1]++;
        }
    }

    for (let i = 0; i < s2.length; i++) {
        let ch2 = s2[i];
        if (counts2[ch2] === undefined) {
            counts2[ch2] = 1;
        } else {
            counts2[ch2]++;
        }
    }

    for (let key in counts1) {
        if (counts1[key] !== counts2[key]) {
            return "Not anagram";
        }
    }

    return "Anagram";
}

console.log(Anagram(s1, s2));