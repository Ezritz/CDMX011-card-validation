// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "5579070090893929"', () => {
      expect(validator.isValid('5579070090893929')).toBe(true);
    });
    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid('4083952015263')).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid('79927398713')).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid('1234567890')).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('4556364607935616')).toBe('############5616');
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify('1')).toBe('1');
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify('helloworld')).toBe('######orld');
    });
  });

  describe('validator.getIssuer', () => {
    it('debería ser una función', () => {
      expect(typeof validator.getIssuer).toBe('function');
    });
    it('Debería retornar "visa" para "4"', () => {
      expect(validator.getIssuer('4')).toBe('visa');
    });
    it('Debería retornar "mastercad" para "51"', () => {
      expect(validator.getIssuer('51')).toBe('mastercard');
    });
    it('Debería retornar "mastercad" para "52"', () => {
      expect(validator.getIssuer('52')).toBe('mastercard');
    });
    it('Debería retornar "mastercad" para "53"', () => {
      expect(validator.getIssuer('53')).toBe('mastercard');
    });
    it('Debería retornar "mastercad" para "54"', () => {
      expect(validator.getIssuer('54')).toBe('mastercard');
    });
    it('Debería retornar "mastercad" para "55"', () => {
      expect(validator.getIssuer('55')).toBe('mastercard');
    });
    it('Debería retornar "amex" para "34"', () => {
      expect(validator.getIssuer('34')).toBe('amex');
    });
    it('Debería retornar "amex" para "37"', () => {
      expect(validator.getIssuer('37')).toBe('amex');
    });
    it('Debería retornar "" para ""', () => {
      expect(validator.getIssuer('')).toBe('');
    });
  });
});
