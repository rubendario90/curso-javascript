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