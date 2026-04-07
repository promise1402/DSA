const arr = [1, 2, 4, 6];

const MissingNums = (arr) => {
    let max = Math.max(...arr);

    let missing =[];

    for (let i = 1; i <= max; i++){
        if (!arr.includes(i)){
            missing.push(i);
        }
    }

    return missing;

}

console.log(MissingNums(arr));