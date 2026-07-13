// let str = "1011"

// const BintoDec = (str) => {

//     let decimal = 0;
//     for (let i = 0; i <= str.length - 1; i++) {
//         decimal = decimal * 2;

//         if (str[i] === "1") {
//             decimal = decimal + 1;
//         }
//     }
//     return decimal;

// }

// console.log(BintoDec(str));

const binaryToDecimal = (binary) => {
  let decimal = 0;
  let power = 1;

  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === '1') {
      decimal += power;
    }

    power *= 2;
  }

  return decimal;
};

console.log(binaryToDecimal("1010")); // 10