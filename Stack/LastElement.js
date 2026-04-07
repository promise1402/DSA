// Find last element without using .length()

let stack = [1, 2, 3, 4];

const peek = (stack) => {

    let last;

    for (let i = 0; ; i++) {
        if (stack[i] === undefined) {
            break;
        }
        last = stack[i];
    }
    return last;

}
console.log(peek(stack));