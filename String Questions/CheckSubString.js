const str = "Promise";

const sub = "mise";

const SubString = (str, sub) => {

    let n = str.length;
    let m = sub.length;

    for (let i = 0; i <= n - m; i++) {
        let found = true;

        for (let j = 0; j < m; j++) {
            if (str[i + j] !== sub[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;

}

console.log(SubString(str, sub))