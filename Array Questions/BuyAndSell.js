let prices = [7, 10, 1, 3, 6, 9, 2];

const maxProfit = (prices) => {
    let n = prices.length;
    let res = 0;

    for ( let i = 0; i < n-1 ; i++) {
        for (let j = i+1; j < n; j++){
            res = Math.max(res, prices[j] - prices[i]);
        }
    }
    return res;
}

console.log(maxProfit(prices));           