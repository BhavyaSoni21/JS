// if even then n/2
// if odd then 3n+1

for(){
    if (n%2==0){
        n = n/2;
        console.log(`->${n}`);
    } else {
        n = 3*n + 1 ;
        console.log(`->${n}`)
    }
}