s1 = "geeks";
s2 = "sgeek";

const isAnagram = (s1, s2) => {
    if (s1.length !== s2.length) {  
        return false;
    }
    const charCount = {};
    for (let char of s1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }   
    for (let char of s2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }
    return true;    

}

if (isAnagram(s1, s2)) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}