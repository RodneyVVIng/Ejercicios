const {
    sumarDiezMasDiez,
    crearObjetoEjemplo,
    obtenerValor,
    obtenerCadena,
    crearArray,
    operacionAsincrona
} = require('./funciones');

// a. Igualdad exacta con toBe (corregido según imagen)
test('10 + 10 es igual a 20', () => {
    expect(sumarDiezMasDiez()).toBe(20);
});

// b. Comparación de objetos con toEqual
test('comparación de objetos idénticos', () => {
    const obj1 = crearObjetoEjemplo();
    const obj2 = { id: 1, nombre: "test", activo: true };
    expect(obj1).toEqual(obj2);
});

// c. Verificación de valores nulos y definidos
describe('Verificación de valores especiales', () => {
    test('debe retornar null', () => {
        expect(obtenerValor('null')).toBeNull();
    });
    
    test('debe retornar undefined', () => {
        expect(obtenerValor('undefined')).toBeUndefined();
    });
    
    test('debe retornar valor definido', () => {
        expect(obtenerValor('any')).toBeDefined();
    });
});

// d. Comparaciones numéricas (usando función suma)
const suma = require('./suma');
describe('Comparaciones numéricas', () => {
    test('5 es mayor que 3', () => {
        expect(suma(3, 2)).toBeGreaterThan(3);
    });
    
    test('4 es menor que 5', () => {
        expect(suma(2, 2)).toBeLessThan(5);
    });
    
    test('6 es mayor o igual a 6', () => {
        expect(suma(3, 3)).toBeGreaterThanOrEqual(6);
    });
});

// e. Coincidencia de cadenas con regex
test('la cadena contiene "Jest"', () => {
    expect(obtenerCadena()).toMatch(/Jest/);
    expect(obtenerCadena()).toMatch('testing');
});

// f. Verificación de contenido en arrays
test('el array contiene el número 3', () => {
    expect(crearArray()).toContain(3);
    expect([...crearArray(), 6]).toContain(6);
});

// g. Negación de matchers con .not
test('10 + 10 no es igual a 21', () => {
    expect(sumarDiezMasDiez()).not.toBe(21);
});

// h. Pruebas asíncronas con promesas
describe('Pruebas asíncronas', () => {
    test('resuelve correctamente', () => {
        return expect(operacionAsincrona(true)).resolves.toBe('Éxito');
    });
    
    test('rechaza correctamente', () => {
        return expect(operacionAsincrona(false)).rejects.toMatch('Error');
    });
});