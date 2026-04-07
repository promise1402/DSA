let stack = [10, 20, 30];

const peek = (stack) => {

    if (stack.length === 0) {
        return null;
    }

    return stack[stack.length - 1];
}

console.log(peek(stack));