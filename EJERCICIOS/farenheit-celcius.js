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

//solucion 3
window.addEventListener("load", inicio);

function inicio (){
document.querySelector("#btn").addEventListener("click", mostrarEjercicio);
}

function convertirCelsiusAFahrenheit(temperatura) {
return (temperatura * 1.8) + 32;
}

function mostrarEjercicio(){
let laTemperatura = Number(document.querySelector("#val1").value);

let temperaturaEnFahrenheit = convertirCelsiusAFahrenheit(laTemperatura);
let mensaje;
if (temperaturaEnFahrenheit) {
    mensaje = "la temperatura en fahrenheit es "+ temperaturaEnFahrenheit;
    
}

document.querySelector("#resultado").innerHTML = mensaje;


}