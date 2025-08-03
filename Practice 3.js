
//What is the largest prime factor of 600851475143
let n = 600851475143
let factor = 2;
while(factor*factor <= n){
    if(n%factor==0){
        n=n/factor;
    } else {
        factor++;
    }
}
console.log(`The Largest prime factorial of 600851475143 is ${n}`);
