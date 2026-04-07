let stack = [1, 2, 3, 4, 5, 6];

const peek = (stack) => {
    let mid = Math.floor(stack.length / 2);
    return stack[mid];
}
console.log(peek(stack));