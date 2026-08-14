const arr = [7, 0, 0, 1, 7, 7, 2, 7, 7] ;

const Solution = (arr) => {
    let n = arr.length;

    for (let i =0; i< n; i++){

            let count = 0;

            for(let j =0; j<n; j++){
                if(arr[j] ===arr[i]){
                    count++;
                }
            }

            if(count > Math.floor(n/2)){
                return arr[i];
            }
        
    }
}

console.log(Solution(arr));