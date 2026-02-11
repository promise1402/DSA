const outer = () => {
    let count = 0;

    const inner = () => {
        count++;
        console.log(count);
    }
    return inner;
}

const counter = outer();

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

// Explanation: The inner function has access to the count variable defined in the outer function,
// even after the outer function has finished executing. This is because of closures,
// which allow the inner function to "remember" the environment in which it was created.
// Each time we call counter(), it increments and logs the count variable,
// demonstrating that it retains access to the count variable across multiple calls.