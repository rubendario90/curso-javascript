/* 
Bucle for: Se utiliza cuando se conoce la cantidad exacta de 
repeticiones que se desea realizar.*/

for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  

  /* 
  Bucle while: Se utiliza cuando se desea repetir una acción 
  mientras se cumpla una condición específica.
  */

  let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

/* 
Bucle do-while: Similar al bucle while, pero garantiza 
que el bloque de código se ejecute al menos una vez antes de verificar 
la condición.
*/

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);


//ejemplo e bucle for

/* el bucle for tiene tres condiciones, 
1: declarar la variable
2: la condicion de la variable
3: La parte final es el incrementador 
que cambia el valor de i en cada bucle.
*/
for (var i = 1; i <=3; i++) {
  console.log(i);}
  console.log('go');

  //el bucle for tambien se puede decrementar
  for (var i = 10; i > 0; i--) {
    console.log(i);}
    console.log('happy new year');


  //ejemplo de bucle for
    for (var i = 0; i <= 3; i++) {
      console.log("This is line ", i)
  }

  //ejemplo de bucle while
  var counter = 3;
  while (counter > 0) {
    console.log(counter);
    counter = counter - 1;  }


  //ejemplo basico de codigo con for
  for (var i = 1; i <=5; i++) {
    console.log(i);}

    //ejemplo basico de codigo con for
  for (var i = 5; i > 0; i--) {
    console.log(i);}

//ejemplo ciclo while
    var i = 1;
while (i < 6) {
    console.log(i);
    i++;
};
console.log('Counting completed!');

//ejemplo ciclo while
var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;
};
console.log('Counting completed!');

//ejemplo
for (var firstNum = 0; firstNum < 2; firstNum++) {
  console.log(firstNum);}

  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(secondNum);
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
      console.log(firstNum + ", " + secondNum);
  }
}

for (var firstNum = 0; firstNum < 2; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
      console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
  }
}


//
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}