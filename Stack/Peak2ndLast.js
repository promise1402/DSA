let stack = [1, 2, 3, 4, 5, 6];

const peek = (stack) => {
    if (stack.length < 2) {
        return null;
    }
    return stack[stack.length - 2];
}

console.log(peek(stack));