//Function taking another function
const greet = (name) => {
    return "Hello " + name;
}

const greetWithCallback = (callback) => {
    const name = "Alice";
    return callback(name);
}

console.log(greetWithCallback(greet)); // Output: Hello Alice

//function returning another function

const multiply = (a) => {
    return (b) => {
        return a * b;
    };
}

const double = multiply(2);

console.log(double(5)); // Output: 10