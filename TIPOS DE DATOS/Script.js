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
