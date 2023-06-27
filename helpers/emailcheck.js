function validarCorreo(correo) {

    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(correo);
  
}


module.exports = validarCorreo;