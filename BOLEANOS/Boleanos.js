//*Ejercicio 1

var a = 10;
var b = 20;
if (a > b) console.log("Variable `a` has higher value");
else console.log("Variable `b` has higher value");

//*ejercicio 2

var studentName = "John";
var haveEnrolledInCourse = true;
var haveCompletedTheCourse = true;

if (haveEnrolledInCourse) {
  console.log("Welcome " + studentName + " to Udacity!");
}

if (haveCompletedTheCourse) {
  console.log(
    "felicitaciones " + studentName + " has finalizado el curso de Udacity!"
  );
}

/* 
valores falsos
Un valor es falso si se convierte en falsecuando se evalúa en un contexto booleano. Por ejemplo, una cadena vacía ""es falsa porque ""se evalúa como false. Ya sabe las 
declaraciones if...else, así que usémoslas para probar la veracidad de "".

if ("") {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}
Devuelve: "el valor es falso"

Aquí está la lista de todos los valores falsos:
el valor booleanofalse
el nulltipo
el undefinedtipo
el número0
la cadena vacía""
el valor impar NaN(significa "no es un número", consulta el NaNartículo de MDN )
Así es, ¡solo hay seis valores falsos en todo JavaScript!

Valores verdaderos
Un valor es verdadero si se convierte en truecuando se evalúa en un contexto booleano. Por ejemplo, el número 1es verdadero porque 1se evalúa como true. 
Usemos una declaración if...else nuevamente para probar esto:

if (1) {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}
Devuelve: "el valor es verdadero"

Aquí hay algunos otros ejemplos de valores veraces:

true
42
"pizza"
"0"
"null"
"undefined"
{}
[]
*/


/* 
operador ternario
El operador ternario le proporciona una alternativa de atajo para escribir largas sentencias if...else.

conditional ? (if condition is true) : (if condition is false)
Para usar el operador ternario, primero proporcione una declaración condicional en el lado izquierdo del ?. Luego, entre ?y :escriba el código que se ejecutaría si la condición es truey 
en el lado derecho escriba :el código que se ejecutaría si la condición es false. Por ejemplo, puede reescribir el código de ejemplo anterior como:
*/
var isGoing = false;
var color = isGoing ? "green" : "red";
console.log(color);


//ejemplo
var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

//ejemplo

var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants && eatsAnimals ? "omnivore" :
               eatsPlants ? "herbivore" :
               eatsAnimals ? "carnivore" :
               undefined;

console.log(category)

//ejemplo
var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);