//hola mundo
var nombre = "ruben";
console.log(nombre);

//*tipos de datos en javascript*
/* 
En Javascript existen 7 tipos de datos
*String Cadenas de texto.
*Number Valores numéricos.
*Boolean Representa una entidad lógica y puede tener dos 
valores: true y false.
*null Es un valor asignado tiene el valor de “no valor”.
*undefined Una variable a la que no se le ha asignado ningún 
valor tiene el valor undefined.
*Symbol Nuevo en ECMAScript 2015.
*Object Un valor en memoria al que podemos acceder por un 
identificador.
*/
var nombre = "carlos"; //*string
console.log(nombre);

var edad = 25; //*number
console.log(edad);


var Adulto = true; //*boolean
console.log(Adulto);
Adulto = false;
console.log(Adulto);

//*odject
var Objeto = {
    nombre: "ruben",
    edad: 25
}
console.log(Objeto);

//*type off
/* se utiliza para conocer el tipo de dato */

var objeto = {
    nombre: "ruben",
    edad: 25
}
console.log(typeof nombre);
console.log(typeof edad);

// booleano
var bandera = true;
console.log(bandera);

//function

function mifuncion () {
    console.log(typeof mifuncion);
}

//typo symbol

var symbol = Symbol("mi simbolo");
console.log(typeof symbol);

//function
class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
console.log(persona);

//tipo undefined

var x;
console.log (x);

//null ausencia de valor 

var y = null;
console.log (y);

//array
var autos = [
    'bwm', 'audi', 'volvo'
];

console.log(autos);
console.log(typeof autos);

//valores vacios
var z = '';
console.log (z);
console.log(typeof z);

//concatenacion de cadenas

var cadena1 = 'hola';
var cadena2 ='mundo';
var cadena3 = 'javascript';
var cadena = cadena1 +' ' + cadena2 +' ' + cadena3;
console.log(cadena);

//ejercicio 2 concatenaciones
var nombre = 'juan';
var apellido = 'perez';

var nombreCompleto = nombre +' ' + apellido;
console.log(nombreCompleto);


//*let
/* Declara una variable local con ámbito de bloque, 
opcionalmente la inicia a un valor.*/

/*en javascript se puede declarar variables sin necesidad de utilizar
las palabras reservadas para declarar variables
*/
nombre = "juan";
console.log(nombre);

/* se puede primero declarar la variable y luego asignar un valor*/
let nombre1;
nombre1 = "pedro";
console.log(nombre1);

//*const
/* Declara un nombre de constante de solo lectura y ámbito de 
bloque.*/

const apellido1 = "Bayona";
console.log("Mi apellido es " + apellido1 + ".");

/* declarar dos variables en una misma linea*/
let variable1, variable2;
variable1 = 10;
variable2 = 20;
variable3 = variable1 + variable2;
console.log(variable3);

/*
Operadores adicionales
Operador lógico Y:  && 

Operador OR lógico:  || 

Operador lógico NOT:  ! 

El operador de módulo:  % 

El operador de igualdad: ==

El operador de igualdad estricta: ===

El operador de desigualdad: !=

El operador de desigualdad estricta: !==

El operador de asignación de suma:  += 

El operador de asignación de concatenación:  +=  
es el mismo que el anterior, más sobre eso más adelante)*/

var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

/*
El operador de igualdad,  ==
El operador de igualdad comprueba si dos valores son iguales.

Por ejemplo, esta comparación devuelve verdadero : 5 == 5 . De hecho, es cierto que 5 es igual a 5.

Aquí hay un ejemplo del operador de igualdad que devuelve falso :   5 == 6 . De hecho, es cierto que 5 no es igual a 6.

Además, incluso si uno de los valores comparados es del tipo de número y el otro es del tipo de cadena, el valor devuelto sigue siendo verdadero : 5 == "5" .

Esto significa que el operador de igualdad compara solo los valores, pero no los tipos.

El operador de igualdad estricta,  ===
El operador de igualdad estricta compara tanto los valores como los tipos de datos.

Con el operador de igualdad estricta, comparar 5 === 5 aún devuelve true . Los valores a cada lado del operador de igualdad estricta tienen el mismo valor y el mismo tipo. Sin embargo, comparar 5 == "5" ahora devuelve false , porque los valores son iguales, pero el tipo de datos es diferente.

El operador de desigualdad,  !=
El operador de desigualdad comprueba si dos valores no son iguales, pero no comprueba la diferencia de tipos.

Por ejemplo, 5 != "5" devuelve falso, porque es falso afirmar que el número 5 no es igual al número 5, aunque este otro número sea del tipo de datos de cadena.

El operador de desigualdad estricta  !==
Para que el operador de desigualdad estricta devuelva false , los valores comparados deben tener el mismo valor y el mismo tipo de datos.

Por ejemplo,   5 !== 5 devuelve falso porque es falso decir que el número 5 no es del mismo valor y tipo de datos y otro número 5.

Sin embargo, comparar el número 5 y la cadena 5, utilizando el operador de desigualdad estricta, devuelve verdadero .*/


let timeremaining = 0;
let energia = 10;
let gameover = timeremaining == 0 || energia == 0;
console.log ("game over: "  + gameover );

let num1 = 2;
let num2 = 5;
let testing1 = num1 % 2;
let testing2 = num2 % 2;
let result1 = testing1 == 0;
let result2 = testing2 == 0;

console.log ("Is", num1, "an even number?", result1);
console.log ("Is", num2, "an even number?", result2);

let contador = 0;
    contador += 5;
    contador += 3;

console.log (contador);

//*Indexación
/* Para acceder a un carácter individual, 
puede usar la ubicación del carácter en la cadena, llamada su índice . 
Simplemente coloque el índice del carácter entre corchetes (comenzando con [0]el primer carácter) 
inmediatamente después de la cadena. Por ejemplo:*/
var nombre = "James";
console.log (nombre[0]);

var nombre = "James";
console.log (nombre[2]);


//*cadenas de escape
/* 
Hay algunos casos en los que es posible que desee crear una cadena que 
contenga más que solo números y letras. Por ejemplo, ¿qué sucede si desea 
usar comillas en una cadena?

"The man whispered, "please speak to me.""
SyntaxError no capturado: identificador inesperado

Si intenta usar comillas dentro de una cadena, recibirá una 
SyntaxErrorcomo la de arriba.

Debido a que necesita usar comillas para indicar el principio y el final 
de las cadenas, el motor de JavaScript malinterpreta el significado de su 
cadena al pensar que "The man whispered, "es la cadena. Luego, ve el resto 
please speak to me.""y devuelve un SyntaxError.

Si desea usar comillas dentro de una cadena y hacer que JavaScript no 
malinterprete sus intenciones, necesitará una forma diferente de escribir 
comillas. Afortunadamente, JavaScript tiene una manera de hacer esto 
usando el carácter de barra invertida ( \).
*/ 

/* 
Código	     Personaje
\\	\        (barra invertida)
"	''       (comillas dobles)
'	'        (una frase)
\norte	      nueva línea
\t	          pestaña
*/

//ejercicio
console.log ("The man whispered, \"please speak to me.\"")

//ejercicio
var my_string = "Udacity";

// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}

//ejercicio 2
var my_string = "a";
var ASCII_value = my_string.charCodeAt(0);
console.log(ASCII_value);


//ejercicio 3
var haiku = " Blowing from the west"+"\n Fallen leaves gather"+"\n In the east."
console.log(haiku);
