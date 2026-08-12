let n = 6;

const Fibonacci = (n) => {
    if (n === 1) {
        return [0];
    }

    if (n === 2) {
        return [0, 1];
    }

    const res = Fibonacci(n - 1);
    const len = res.length;

    res.push(res[len - 1] + res[len - 2]);

    return res;
}

console.log(Fibonacci(n));