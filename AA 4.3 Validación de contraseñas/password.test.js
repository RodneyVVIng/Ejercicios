const { contrasenaDebil } = require('./password');
const { validarContrasena } = require('./password');

describe('Sección 1: Diseñar una versión incompleta o una función debil', () => {
  // Casos válidos 
  test('una función con cadena y de 8 digitos (12345678)', () => {
    expect(contrasenaDebil('12345678')).toBe(true);
  });

  test('Versión con cadena sin los 8 caracteres minimos (123)', () => {
    expect(contrasenaDebil('123')).toBe(true);
  });

});
describe('Sección 2: Pruebas completas de validación', () => {
  // Casos válidos 
  test('Caso normal válido (Cenote2010@)', () => {
    expect(validarContrasena('Cenote2010@')).toBe(true);
  });

  test('Caso normal válido (Gato2023@)', () => {
    expect(validarContrasena('Gato2023@')).toBe(true);
  });

  // Casos inválidos
  test('Sin mayúscula (voli2010@)', () => {
    expect(validarContrasena('voli2010@')).toBe(false);
  });

  test('Sin minúscula (DZULA2003@)', () => {
    expect(validarContrasena('DZULA2003@')).toBe(false);
  });

  test('Sin número (Jugador@)', () => {
    expect(validarContrasena('Jugador@')).toBe(false);
  });

  test('Sin carácter especial (Gato2003)', () => {
    expect(validarContrasena('Gato2003')).toBe(false);
  });

  test('Con espacio (Voli 2003@)', () => {
    expect(validarContrasena('Voli 2003@')).toBe(false);
  });

  // Casos frontera 
  test('Exactamente 8 caracteres (Dzula03@)', () => {
    expect(validarContrasena('Dzula03@')).toBe(true);
  });

  test('7 caracteres (Gato03@)', () => {
    expect(validarContrasena('Gato03@')).toBe(false);
  });

  // Casos especiales 
  test('Valor no string (20032003)', () => {
    expect(validarContrasena(20032003)).toBe(false);
  });

  test('Cadena vacía', () => {
    expect(validarContrasena('')).toBe(false);
  });

  // Casos adicionales con el patrón requerido
  test('Contiene "2003" (Dzula2003@)', () => {
    expect(validarContrasena('Dzula2003@')).toBe(true);
  });

  test('Contiene "jugador" (Jugador99@)', () => {
    expect(validarContrasena('Jugador99@')).toBe(true);
  });
});