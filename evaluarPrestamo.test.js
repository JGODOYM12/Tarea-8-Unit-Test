// evaluarPrestamo.test.js
const evaluarPrestamo = require('./evaluarPrestamo');

describe('Pruebas para la función evaluarPrestamo', () => {
    test('Caso 1: Estudiante, sin deudas → No aprobado', () => {
        expect(evaluarPrestamo('estudiante', false)).toBe(false);
    });

    test('Caso 2: Estudiante, con deudas → No aprobado', () => {
        expect(evaluarPrestamo('estudiante', true)).toBe(false);
    });

    test('Caso 3: Retirado, sin deudas → Aprobado', () => {
        expect(evaluarPrestamo('retirado', false)).toBe(true);
    });

    test('Caso 4: Retirado, con deudas → No aprobado', () => {
        expect(evaluarPrestamo('retirado', true)).toBe(false);
    });

    test('Caso 5: Trabajador, sin deudas → Aprobado', () => {
        expect(evaluarPrestamo('trabajador', false)).toBe(true);
    });

    test('Caso 6: Trabajador, con deudas → Aprobado', () => {
        expect(evaluarPrestamo('trabajador', true)).toBe(true);
    });
});
