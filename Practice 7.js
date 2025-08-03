//if the first and the second charecter of the fibonacci series are 1 and 1 then the place value of the 1000 digit long number
 
let first = 1n;
let second = 1n;
let next;
index = 2;
while(second.toString().length < 1000) {
    next = first + second;
    first = second;
    second = next;
    index++;
}   
console.log("The first 1000 digit long Fibonacci number is:",index);