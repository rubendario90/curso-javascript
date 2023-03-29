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