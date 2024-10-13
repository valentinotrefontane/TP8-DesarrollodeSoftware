//PARA VER LA WEB ponemos en la terminal de Visual  npm run dev

const { createLogger } = require("vite");

//variables
/**
let nombre = "valentino";
var nombre2 = "luciano"; //estos dos son parecidos
//NO ocupar ya que puede traer errores porq se accede de cualquier parte del programa
const nombre3 = "facundo"; //constante 
*/

//valores
/**
 boolean = true/false
 string = "cadena"
 number = 0
 null = null
 undefined = 
*/

//Operadores
/**
 == => 5 == "5" = true
 === => 5 === "5" = false compara tipo y valor
 != => 5 != "5" = false
 !== => 5 !== "5" = true

 <
 >
 >=
 <=
 && y
 || o

*/

/**
 let edad = 18;
 let edadRequerida = 18;
 if(edad >= 18) {
  console.log("entre");
 } else {
  console.log("no entre");
 }

 switch (edad) {
  case 18:
    console.log("tienes 18")
    break;
  case 19:
    console.log("tienes 19")
    break;
  default:
    console.log("ingresa un valor valido")
 }
*/

//INTRODUCCION A JAVASCRIPT
//Ejercicio 1

/**
 let a = parseFloat(prompt("Ingresa el primer número:"));
 let b = parseFloat(prompt("Ingresa el segundo número:"));
 let c = a + b;

 console.log("El primer número es: " + a);
 console.log("El segundo número es: " + b);
 console.log("La suma de los dos numeros es: " +c);
*/
 
//Ejercicio 2

/**
 let nombre1 = (prompt("¿Cuál es su nombre?"));
 console.log ("Hola, " + nombre1 + "!");
*/

//OPERACIONES LOGICOS Y CONDICIONALES

//Ejercicio 1

/**
 let a = parseFloat(prompt("Ingresa el primer número:"));
 let b = parseFloat(prompt("Ingresa el segundo número:"));
 let c = parseFloat(prompt("Ingresa el segundo número:"));
  if (a > b && a > c) {
    console.log("El numero mayor es: " + a);
  } else if (b > c){
    console.log("El numero mayor es: " + b);
  } else {
    console.log("El numero mayor es: " + c);
  }
*/

//Ejercicio 2

/**
 let numero = parseFloat(prompt("Ingrese un número y le dire si es par o impar:"));
 if (numero % 2 === 0) {
  console.log(numero + " es un número par.");
 } else {
  console.log(numero + " es un número impar.");
 }
  */

//OPERADORES DE ASIGNACION Y BUCLES

//Ejercicio 1

/**
 let i = 0;
 while (i <= 10) {
  console.log(i);
  i++;
 }
*/
 
//Ejercicio 2

/** 
 let numero;
 do {
  numero = prompt("Ingrese un numero mayor a 100")
 } while (numero <= 100);

 console.log("El numero ingresado es mayor a 100: "+numero);
*/

//FUNCIONES DE JAVASCRIPT

//Ejercicio 1

/**
 let numero;
 numero = prompt("Ingrese un numero");

 const esPar = (numero) => {
  return (numero % 2 === 0);
 } 
 console.log("El numero "+numero+ " es par: " + esPar(numero));
*/

//Ejercicio 2

/** 
  let gCelsius;
 gCelsius = prompt("Ingrese la temperatura en grados Celsius");

 const convertirCelsiusAFahrenheit = (gCelsius) => {
  let gFahrenheit;
  gFahrenheit = gCelsius * 1.8 + 32;
  return gFahrenheit;
 }
 
 console.log (gCelsius+ "°C son equivalentes a " +convertirCelsiusAFahrenheit(gCelsius)+ "°F");
*/

//OBJETOS EN JAVASCRIPT

//Ejercicio 1

/**
 let persona = {
  nombre: "Valentino",
  ciudad: "Las Heras",
  edad: 21,

  cambiarCiudad: (ciudad) => {
    ciudad = prompt("Ingrese la nueva ciudad")
    return ciudad;
  },
 }

 console.log("Nombre: "+persona.nombre+", Edad: "+persona.edad+", Ciudad: "+persona.cambiarCiudad(persona.ciudad));
*/

//Ejercicio 2

/**
 let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 1604,

  antiguedadLibro: (año) => {
    let antiguedad;
    antiguedad = 2024 - año;
    return (antiguedad > 10);
  },
 }

 console.log("El Libro "+libro.titulo+" es antiguo: "+libro.antiguedadLibro(libro.año));
*/

//ARRAYS

//Ejercicio 1

/** 
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosMultiplicados = [];

for (let i = 0; i < numeros.length; i++) {
  numerosMultiplicados.push(numeros[i] * 2);
}

console.log("Array original:", numeros);
console.log("Nuevo array (multiplicado por 2):", numerosMultiplicados);
*/

//Ejercicio 2

/** 
 let arregloPares = [];

 for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    arregloPares.push(i);

      if (arregloPares.length === 10) {
        break;
      }
  }
 }
 console.log("Los primeros 10 numeros pares son: "+arregloPares);
*/

//INTRODUCION A DOM

//Ejercicio 1

/**Esto va en el html
 <p>Este es el primer parrafo</p>
    <p>Este es el segundo parrafo</p>
    <p>Este es el tercer parrafo</p>
    <button onclick="cambiarColor()">Cambiar color</button>
    <script>
    function cambiarColor() {
            // Obtener todos los elementos p en la página
            const parrafos = document.querySelectorAll('p');
            
            // Iterar sobre cada párrafo y cambiar su color de texto a azul
            parrafos.forEach(function(parrafo) {
                parrafo.style.color = 'blue';
            });
          }   
*/

//Ejercicio 2


