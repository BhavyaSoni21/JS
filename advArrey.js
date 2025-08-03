//Object
const myObject = {
    "name" : "Alice",
    "age" : 25,
    "isStudent" : true,
    "hobbies" : ["reading","coding"],
    "address" : {
        "city" : "Newyork",
        "zipcode" : "100001"
    }
}
console.log(`Name: ${myObject.name}`)
console.log(`hobbie: ${myObject.hobbies[0]}`)
console.log(`address; ${myObject.address.city}`)
console.log()

//Array
//Normal mind will do
let num = []
let r = 0
for(let i=0; i<100; i++){
    num[i]=i+1;
    num[i]=num[i]*3
    if(num[i]%5==0){
        r += num[i];
    }
}
console.log(num)
console.log(`Sum is(by me): ${r}`)

//An extra-ordinary minds approach
let num1 = []
for(let i=0; i<101; i++){num1.push(i)}
console.log(`Sum is(by sir): ${num1.map(x => x*3).filter(x => x%5==0).reduce((num1,x)=>num1+x)}`)

const users = [
    {"name":"alice", "age":28},
    {"name":"Bob", "age":30},
    {"name":"Charlie", "age":25}
]
totage=users.map(x=>x.age).reduce((a,x)=>a+x)
console.log(totage/users.length)