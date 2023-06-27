const validarCorreo = require('../helpers/emailcheck');
const suma = require('../helpers/suma');
const validarSuperAdmin = require('../helpers/sesionadmin');



describe('Pruebas unitaria para validarCorreo()', () => {
    
    test('Debería devolver true para un correo válido', () => {
      const correoValido = 'esteban.vivanco@gmail.com';
      expect(validarCorreo(correoValido)).toBe(true);
    });
  
    test('Debería devolver false para un correo inválido', () => {
      const correoInvalido = 'correo@invalido';
      expect(validarCorreo(correoInvalido)).toBe(false);
    });

});


describe('Suma correcta del valor de las entradas ', () => {
    test('debería sumar los valores correctamente', () => {
      // Configurar el estado inicial
      const lista = [9990, 4990, 4990, 4990, 9990];
  
      // Llamar a la función que se va a testear
      const resultado = suma(lista);
  
      // Verificar el resultado esperado
      expect(resultado).toBe(34950);
    });
});


describe('Validar usuario REST Auth0', () => {

  test('Validar credencial de Auth0 para validar que es administrador', () => {
    const cadena = 'google-oauth2|113091514139501158590';
    const resultado = validarSuperAdmin(cadena);
    expect(resultado).toBe(true);
  });

  test('Validar credencial de Auth0 para validar que no sea administrador', () => {
    const cadena = 'google-oauth2|11309243564541158590';
    const resultado = validarSuperAdmin(cadena);
    expect(resultado).toBe(false);
  });

});

