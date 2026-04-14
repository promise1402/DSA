const arr = [1, 2, 2, 3, 3, 4, 4, 5, 6];

const Dupe = (arr) => {
    
    let newArr = [];
    let freq = {};
    
    for ( let i = 0; i < arr.length ; i ++) {
        let current = arr[i];
        
        if(freq[current] === undefined || freq[current] === 0){
            newArr.push(current);
            freq[current] = 1;
        }
    }
    return newArr;
};

console.log(" new arr :", Dupe(arr));