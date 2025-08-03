console.log("Hello World!!")

//Cowsay
const Cowsay = require("cowsay");
console.log(Cowsay.say({text:"Moo MOOOOOOOOOOO!!!"}));

// Constant
const Constant1 = 123;
console.log(Constant1);

//Variable
var Variable1 = 456;
console.log(`This is my first variable ${Variable1}`);

//Function Decleration And Calling
function Greet(name){
    let massage = `Hello, ${name}` ;
    return massage;
}
const greeting = Greet('Alice');
console.log(greeting);

//Loops
    //While
let counter = 0;
while(counter < 3){
    console.log(`My Counter is ${counter}`);
    counter++;
}

    //For
const fruits = ["Apple","Grapes","Mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

    //if - else
let temprature = 25;
if (temprature>30) {
    console.log("Its a hot day");
} else if (temprature > 20) {
    console.log("Its a moderate day");
} else {
    console.log("Its a chilly day");
}

//giving default values to function
function calculateArea(length, width=1){
    return length * width;
}

const rectangleArea = calculateArea(8,4);
console.log(`Area of rectangle is ${rectangleArea}`);

const squareArea = calculateArea(6);
console.log(`Area of Square(using default width) is ${squareArea}`);

//without defining function
const getSum = function(x, y){return x+y;}
const addition = getSum(15,56);
console.log(addition);

const multiply = (x ,y) => x*y;
console.log(`The multiplication is ${multiply(4,9)}`);
