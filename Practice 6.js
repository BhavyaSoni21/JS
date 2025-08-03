//find the sum of all the digits of 2^1000 using arrey reduce method
const bigNumber = BigInt(2 ** 1000);
const sumOfDigits = bigNumber.toString().split('').map(Number).reduce((a, x) => a+x);      
console.log("Sum of digits of 2^1000:", sumOfDigits);