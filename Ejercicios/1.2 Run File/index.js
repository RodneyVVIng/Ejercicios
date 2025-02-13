console.log("¡Hola, Node.js en VS Code!");
// 1️ Comentarios en línea y multilínea
// Esto es un comentario en línea
/* Esto es un comentario
   en múltiples líneas */

// 2️ Declarar variables y mostrarlas en consola
let nombre = "Juan";  // Variable de tipo string
const edad = 25;      // Constante de tipo número
var activo = true;    // Variable de tipo booleano
console.log(nombre, edad, activo);

// 3️ Crear un array con diferentes tipos de elementos
let elementos = ["Texto", 42, true, { key: "valor" }, [1, 2, 3]];
console.log(elementos);

// 4️ Función que toma dos números y aplica una operación
function operar(a, b) {
    return a + b;  // Suma de los números
}
console.log(operar(5, 3));

// 5️ Función flecha que recibe un string e imprime en mayúsculas
const enMayusculas = str => console.log(str.toUpperCase());
enMayusculas("hola mundo");

// 6️ Bucle que imprime números del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 7️ Objeto que representa una fruta
let fruta = {
    nombre: "Mandarina",
    color: "Amarillo",
    peso: "80g"
};
console.log(fruta);

// 8️ Agregar un método al objeto
fruta.getDescripcion = function() {
    return `Esta fruta es una ${this.nombre} de color ${this.color} y pesa aproximadamente ${this.peso}.`;
};
console.log(fruta.getDescripcion());


// 9️ Módulo con funciones matemáticas básicas
// En un archivo llamado "mathModule.js":
/*
module.exports = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b
};
*/
// En otro archivo:
const math = require('./mathModule');
console.log(math.suma(10, 5));
console.log(math.resta(10, 5));

// 10 Función asincrónica con setTimeout y callback
function operacionAsincrona(a, b, callback) {
    setTimeout(() => {
        let resultado = a * b;
        callback(resultado);
    }, 2000);
}
operacionAsincrona(3, 4, (res) => console.log("Resultado:", res));

// 11 Manejo de errores al convertir una cadena a número
try {
    let numero = Number("cinco");
    if (isNaN(numero)) throw new Error("No es un número válido");
    console.log(numero);
} catch (error) {
    console.error("Error:", error.message);
}
