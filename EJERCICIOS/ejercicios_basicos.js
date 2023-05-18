//ejercicio
var a2 = 10;
var b2 = 20;
// a comparison - we will study this in detail in upcoming lesson
if (a2>b2) // The outcome of a>b will be a boolean
	console.log("Variable `a2` has higher value"); // if a>b is true
else 
	console.log("Variable `b2` has higher value"); // if a>b is false


//cadenas
let adjective1 = 'amazing';
let adjective2 = 'fun';
let adjective3 = 'entertaining';

let madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;

console.log(madLib);

//cadenas 
let firstName = 'Julia';
let interest = 'cats';
let hobby = 'play video games';

let awesomeMessage = 'Hi, my name is ' + firstName + '. I love ' + interest + '. In my spare time, I like to ' + hobby + '.';

console.log(awesomeMessage);

// ejemplo de codigo
var price = 15.00
var Money = 20.00

if (Money >= price) {
	console.log("buy the hammer");
}
else {
	console.log("don't buy the hammer");
}	

//ejemplo de codigo
var a = 1;
var b = 2;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}


//la condicional if else se utiliza para 
//agg una condicional adicional
var money = 100.50;
var price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}



