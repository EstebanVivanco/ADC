function validarRut(rut) {
    // Expresión regular para verificar el formato del RUT
    const formato = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
    return formato.test(rut);
}

module.exports = validarRut;