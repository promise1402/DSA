const string = "Hello Promise";

const Reverse = (string) => {

    const reversed = string.split('').reverse().join('');

    console.log(reversed);

}

Reverse(string);