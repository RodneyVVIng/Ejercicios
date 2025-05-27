function multiplicacionDos(a, b) {
    return a * b;
}

function multiplicacion(a, b){
if(
    typeof a !== 'number'||typeof b !=='number'||
    !Number.isFinite(a) || !Number.isFinite(b) ||
    !Number.isSafeInteger(a) || !Number.isSafeInteger(b)
){return NaN;}
return a*b;
}
module.exports = multiplicacion; 
console.group('Pruebas exhaustivas de la función multiplicación');
console.log('Caso normal (2 x 3):', multiplicacion(2, 3));
console.log('Caso normal con decimales (2.5 x 4.2):', multiplicacion(2.5, 4.2));
console.log('Caso frontera (0 x 5):', multiplicacion(0, 5)); 
console.log('Caso frontera (-0 x 5):', multiplicacion(-0, 5)); 
console.log('Caso frontera (números grandes):', multiplicacion(Number.MAX_SAFE_INTEGER, 2));
console.log('Caso fuera de frontera (números grandes):', multiplicacion(100000000000000000, 2));
console.log('Caso inválido (undefined):', multiplicacion(undefined, 3));
console.log('Caso inválido (sin argumentos):', multiplicacion());
console.log('Caso coerción de tipo (strings):', multiplicacion('2', '3'));
console.log('Caso coerción de tipo (null):', multiplicacion(null, 5));
console.log('Caso con negativos (uno negativo):', multiplicacion(-2, 3));
console.log('Caso con negativos (dos negativos):', multiplicacion(-2, -3));
console.groupEnd();

