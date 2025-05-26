// a. Función para prueba de igualdad
function sumarDiezMasDiez() {
    return 10 + 10;
}

// b. Función para creación de objeto
function crearObjetoEjemplo() {
    return { id: 1, nombre: "test", activo: true };
}

// c. Función para valores especiales
function obtenerValor(tipo) {
    if (tipo === 'null') return null;
    if (tipo === 'undefined') return undefined;
    return 'definido';
}

// e. Función para cadena de texto
function obtenerCadena() {
    return "Jest es un framework de testing";
}

// f. Función para array
function crearArray() {
    return [1, 2, 3, 4, 5];
}

// h. Función asíncrona
function operacionAsincrona(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve('Éxito');
            } else {
                reject('Error');
            }
        }, 100);
    });
}

module.exports = {
    sumarDiezMasDiez,
    crearObjetoEjemplo,
    obtenerValor,
    obtenerCadena,
    crearArray,
    operacionAsincrona
};