/*Una función se declara escribiendo la palabra clave función, 
luego espacio yluego el nombre de la función 
Coloque un paréntesis izquierdo y derecho.Finalmente coloque una llave
 izquierda y otra derecha para completar la función.El código a ejecutar se 
 colocará entre los lados izquierdo y derecho.llaves derechas.Y esto se 
 conoce como el cuerpo de la función.*/

 function addTwoNums (a,b) {
var c = a + b;
console.log(c);
}

addTwoNums(2,2);


//ejemplo
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);


//prueba

function letterFinder(word, match) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === match) {
        console.log('Encontré la', match, 'en', i);
      } else {
        console.log('---No se encontraron coincidencias en', i);
      }
    }
  }
  
  // Llamada a la función con los argumentos "prueba" y "t"
  letterFinder("prueba", "b");


  //
  function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

arrayBuilder('apple', 'pear', 'plum');

var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr);


/*
constantes numéricas
Estas son algunas de las constantes numéricas integradas que existen en el objeto Math:

El número PI:  Math.PI  que es aproximadamente 3.14159

La constante de Euler:  Math.E  que es aproximadamente 2.718

El logaritmo natural de 2:  Math.LN2 que es aproximadamente 0.693

Métodos de redondeo
Éstas incluyen:

 Math.ceil()  - redondea al entero más cercano

 Math.floor()  - redondea hacia abajo al entero más cercano

 Math.round()  : redondea al entero más cercano si el decimal es  .5  o superior; de lo contrario, redondea hacia abajo al entero más cercano

 Math.trunc()  - recorta el decimal, dejando solo el entero

Métodos aritméticos y de cálculo.
Aquí hay una lista no concluyente de algunos métodos aritméticos y de cálculo comunes que existen en el  objeto Math  :

Math.pow(2,3)  - calcula el número  2  a la potencia de  3 , el resultado es  8 

Math.sqrt(16)  - calcula la raíz cuadrada de  16 , el resultado es  4 

Math.cbrt(8)  - encuentra la raíz cúbica de  8 , el resultado es  2 

Math.abs(-10)  - devuelve el valor absoluto, el resultado es  10 

Métodos logarítmicos:  Math.log() ,  Math.log2() ,  Math.log10() 

Devuelve los valores mínimo y máximo de todas las entradas:  Math.min(9,8,7)  devuelve  7 ,  Math.max(9,8,7)  devuelve  9 .

Métodos trigonométricos:  Math.sin() ,  Math.cos() ,  Math.tan() , etc.
*/

/*  
Aquí hay una lista de todos los métodos cubiertos en esta hoja de trucos:

charAt() 

concat() 

índice de() 

últimoÍndiceDe() 

dividir() 

aMayúsculas() 

aLowerCase()  
*/

//Ejemplo

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);


var clothes = [];
clothes.push('gray t-shirt'); // 1st item of clothing
clothes.push('blue t-shirt'); // 2nd item of clothing
clothes.push('yellow t-shirt'); // 3rd item of clothing
clothes.push('slippers'); // 4th item of clothing
clothes.push('old jeans'); // 5th item of clothing
clothes.pop();
clothes.push('green scarf');
console.log(clothes[1]);
