// evaluarPrestamo.js
function evaluarPrestamo(tipoPersona, tieneDeudas) {
    if (tipoPersona === 'estudiante') {
        return false;
    } else if (tipoPersona === 'retirado') {
        return !tieneDeudas;
    } else if (tipoPersona === 'trabajador') {
        return true;
    }
    return false; // Para casos no esperados
}

module.exports = evaluarPrestamo;
