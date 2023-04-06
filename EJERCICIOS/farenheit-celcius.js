//*convertir celcius a farenheit

// formula de farenheit a celsius F=C×1.8+32

//solucion 1
var celsius = 12;
var fahrenheit = (celsius * 1.8 + 32 );
console.log(fahrenheit);

//solucion 2
var centi, fare;

	centi = parseFloat(prompt("Ingresa grados centígrados"));
	fare = (9/5*centi)+32;

	console.log(centi+" centígrados equivalen a "+ fare +" farenheit");