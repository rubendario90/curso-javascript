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

//ejemplo
let number = 10;

if (number % 2 !== 0) {
  console.log("odd");
} else {
  console.log("even");
}

/* el operador !== se utiliza para realizar
 una comparación estricta de desigualdad. 
 Compara dos valores y devuelve true 
 si los valores son diferentes en términos 
 de valor y tipo de datos. En otras 
 palabras, el operador !== devuelve true 
 si los operandos no son iguales en 
 valor o si no son del mismo tipo de datos.*/


 //


 let musicos = 0;

 if (musicos <= 0) {
  console.log("not a group");
 }
 else if (musicos === 1){
  connsole.log(solo);
 }
 else if (musicos === 2){
  console.log ("duet");
 }
 else if (musicos === 3){
  console.log ("trio");
 }
 else if (musicos === 4) {
  console.log ("quartet");
 }
else if(musicos >= 5) {
  console.log ("this is a large group");
} 

if (musicos === 0) {
console.log ("no group music");
}


let room = "dining room";
let weapon;
let suspect;
let solved = false;

if (room === "dining room") {
  weapon = "knife";
  suspect = "Mr. Parkes";
  solved = true;
} else if (room === "gallery") {
  weapon = "trophy";
  suspect = "Ms. Van Cleve";
  solved = true;
} else if (room === "billiards room") {
  weapon = "pool stick";
  suspect = "Mrs. Sparre";
  solved = true;
} else if (room === "ballroom") {
  weapon = "poison";
  suspect = "Mr. Kalehoff";
  solved = true;
}


//ejemplo de codigo con la declaracion switch


var place = 'first';

switch (place) {
  case "first":
    console.log('gold');
    break;
  case "second":
    console.log('silver');
    break;
  case "third":
    console.log('bronze');
    break;
  default:
    console.log('no medal');
}

/* 
si hay muchos resultados posibles, la mejor práctica es usar una 
declaración de cambio porque es más fácil y menos detallada. Al ser
más fácil de leer, es más fácil seguir la lógica y, por lo tanto, 
reducir la carga cognitiva de leer múltiples condiciones.
Sin embargo, esta no es una regla escrita en piedra. 
Es simplemente una elección estilística.
*/

var edad = 10;
if (edad >= 65) {
  console.log("obtienes tus ingresos de tu pension");
} 
else if (edad <= 65 && edad >= 18) {
  console.log("obtienes un salrio cada mes");}
else if (edad < 18) {
    console.log("obtienes una asignacion");
}
else {
  console.log("el valor de la variable no es numerico");
}

//ejemplo de codigo con switch
let day = "Sunday";

var day = `Sunday`;
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}