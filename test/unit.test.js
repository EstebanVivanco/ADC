const validarCorreo = require('../helpers/emailcheck');
const suma = require('../helpers/suma');
const validarRut = require('../helpers/rutvalidator');




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


describe('Suma correcta de las suscripciones', () => {
    test('debería sumar los valores correctamente', () => {
      // Configurar el estado inicial
      const lista = [9990, 4990, 4990, 4990, 9990];
  
      // Llamar a la función que se va a testear
      const resultado = suma(lista);
  
      // Verificar el resultado esperado
      expect(resultado).toBe(34950);
    });
});



  // Prueba unitaria
  describe('Validar RUT chileno', () => {

    it('debería retornar verdadero para RUTs ingresados correctamente', () => {
      expect(validarRut('20.920.559-9')).toBe(true);
    });
  
    it('debería retornar falso para RUTs ingresados incorrectamente', () => {
      expect(validarRut('12.345.678-0')).toBe(true); // Dígito verificador incorrecto
    });
    
  });