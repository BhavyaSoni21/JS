//find the sum of all even fibonacci number befour million 

let result = 0;
let first = 1; 
let second = 1;
let next = 0;
while(next<4000000){
    next = first + second;
    first = second;
    second = next;
    if(next%2==0){
        result = result + next;
    }
}
console.log(`The product of all the even fibonacci numbers is = ${result}`);
