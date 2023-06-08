//*OPERADOR DE ASIGNACION

/* Asignación	x = y	x = y
Asignación de adición	x += y	x = x + y
Asignación de resta	x -= y	x = x - y
Asignación de multiplicación	x *= y	x = x * y
Asignación de división	x /= y	x = x / y
Asignación de residuo	x %= y	x = x % y
Asignación de exponenciación	x **= y	x = x ** y
Asignación de desplazamiento a la izquierda	x <<= y	x = x << y
Asignación de desplazamiento a la derecha	x >>= y	x = x >> y
Asignación de desplazamiento a la derecha sin signo	x >>>= y	x = x >>> y
Asignación AND bit a bit	x &= y	x = x & y
Asignación XOR bit a bit	x ^= y	x = x ^ y
Asignación OR bit a bit	x |= y	x = x | y
Asignación AND lógico	x &&= y	x && (x = y)
Asignación OR lógico	x ||= y	x || (x = y)
Asignación de anulación lógica	x ??= y	x ?? (x = y)*/

let x = 3, y = 3;
let z = x += y;
console.log (z)

let x1 = 3, y1 = 4;
let z1 = x1 -= y1;
console.log ("EL RESULTADO DE LA RESTA ES: " + z1)



//*OPERADOR DE COMPARACION

/* 
Igual (==)	Devuelve true si los operandos son iguales.
No es igual (!=)	Devuelve true si los operandos no son iguales.
Estrictamente igual (===)	Devuelve true si los operandos son iguales y del mismo tipo. Consulta también Object.is y similitud en JS.
Desigualdad estricta (!==)	Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.
Mayor que (>)	Devuelve true si el operando izquierdo es mayor que el operando derecho.
Mayor o igual que (>=)	Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.
Menor que (<)	Devuelve true si el operando izquierdo es menor que el operando derecho.
Menor o igual (<=)	Devuelve true si el operando izquierdo es menor o igual que el operando derecho.
*/


//*Operadores aritméticos
/*
Residuo (%)	Operador binario. Devuelve el resto entero de dividir los dos operandos.
Incremento (++)	Operador unario. Agrega uno a su operando. Si se usa como operador prefijo (++x), devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo (x++), devuelve el valor de su operando antes de agregar uno.
Decremento (--)	Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.
Negación unaria (-)	Operador unario. Devuelve la negación de su operando.
Positivo unario (+)	Operador unario. Intenta convertir el operando en un número, si aún no lo es.
Operador de exponenciación (**)	Calcula la base a la potencia de exponente, es decir, baseexponente
*/

//preincremento
let a = 3, b = 4;
let c = a += b;
preincremento = c = ++a;
console.log (preincremento)

//postincremento

let a1 = 3, b1 = 4;
let c1 = a1 += b1;
postincremento = c1 = c1++;
console.log (postincremento)

//  Expresiones logicas
var colt = "not busy";
var weather = "nice";

if (colt === "not busy" && weather === "nice") {
  console.log("go to the park");
}
/*
Fíjate &&en el código de arriba.
El &&símbolo es el operador lógico AND y se usa para combinar dos expresiones lógicas en una expresión lógica más grande. Si las dos expresiones más pequeñas son verdaderas , la expresión completa se evalúa como verdadera . Si cualquiera de las expresiones más pequeñas es falsa , entonces toda la expresión lógica es falsa .
Otra forma de pensarlo es cuando el &&operador se coloca entre las dos declaraciones, el código dice literalmente, "si Colt no está ocupado Y hace buen tiempo, entonces ve al parque".
*/

/* 
Operador	    Significado	       Ejemplo	Cómo funciona
&&	Y lógico	value1 && value2	Devuelve true si ambos value1 y value2 evalúan a true.
||	O lógico	value1 || value2	Devuelve true si o value1 bien value2 (¡ o incluso ambos! ) se evalúa como true.
! NO lógico	!value1	Devuelve lo contrario de value1. Si value1 es true, entonces !value1es false.
*/


/* 
tabla de verdad del operador or 
P	Q	P or Q
0	0	0
0	1	1
1	0	1
1	1	1
*/


/* 
tabla de verdad del operador and
P	Q	P and Q
0	0	0
0	1	0
1	0	0
1	1	1
*/

//EJEMPLOD E CODIGO EN JAVASCRIPT 
var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance) {
if (isActive && balance > 0) {
console.log("Your balance is $" + balance.toFixed(2) + ".");
} 
else if (!isActive) {
console.log("Your account is no longer active.");
} 
else if (balance === 0) {
console.log("Your account is empty.");
} else {
console.log("Your balance is negative. Please contact bank.");
}
} else {
console.log("Checking balance is not available.");
}

//ejemplo de codigo
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa el sabor de tu helado: ', (sabor) => {
  rl.question('Ingresa el tipo de recipiente: ', (recipiente) => {
    rl.question('Ingresa las coberturas: ', (coberturas) => {
      console.log(`Tu helado es de ${sabor}, tu recipiente es de ${recipiente}, y tus coberturas son ${coberturas}`);
      rl.close();
    });
  });
});

