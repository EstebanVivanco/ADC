function suma (lista){
    
    const suma = lista.reduce((total, numero) => total + numero, 0);
    return suma;
}

module.exports = suma;