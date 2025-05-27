const multiplicacion = require('./mult');

describe('Pruebas para encontrar debilidades en multiplicacion', () => {
  test('Multiplicación normal (2 x 3)', () => {
    expect(multiplicacion(2, 3)).toBe(6);
  });

  test('Multiplicación por 0', () => {
    expect(multiplicacion(0, 5)).toBe(0);
  });

  test('Multiplicación por -0 (frontera rara)', () => {
    expect(multiplicacion(-0, 5)).toBe(-0); // Fallará si esperas 0
  });

  test('Strings como argumentos', () => {
    expect(multiplicacion('2', '3')).toBe(6);
  });

  test('Null como argumento', () => {
    expect(multiplicacion(null, 5)).toBe(0);
  });

  test('Undefined como argumento', () => {
    expect(multiplicacion(undefined, 3)).toBeNaN();
  });

  test('Sin argumentos', () => {
    expect(multiplicacion()).toBeNaN();
  });

  test('Argumento NaN', () => {
    expect(multiplicacion(NaN, 2)).toBeNaN();
  });

  test('Número extremadamente grande', () => {
    expect(multiplicacion(1e20, 2)).toBe(2e20); // Fallará por precisión
  });

  test('Objeto como argumento', () => {
    expect(multiplicacion({}, 2)).toBeNaN();
  });
});

describe('Pruebas con números negativos', () => {
  test('Multiplicación con un número negativo', () => {
    expect(multiplicacion(-2, 3)).toBe(-6);
  });

  test('Multiplicación con dos números negativos', () => {
    expect(multiplicacion(-2, -3)).toBe(6);
  });
});

