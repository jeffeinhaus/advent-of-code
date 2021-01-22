import {
  hasValidDateInRange,
  hasValidEyeColor,
  hasValidHairColor,
  hasValidHeight,
  hasValidPassportId,
  passportProcessing,
} from '.';
import { fileToStringArray } from '@utils/file-reader';

describe('Passport Processing', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');
  const example = fileToStringArray(__dirname, 'input/example.txt');

  describe(passportProcessing, () => {
    it('finds the number of valid passports', () => {
      expect(passportProcessing(example)[0]).toEqual(2);
    });

    it('finds the answer for the puzzle input', () => {
      const result = passportProcessing(puzzle);
      expect(result[0]).toEqual(250);
      expect(result[1]).toEqual(158);
    });

    describe('invalid passport examples', () => {
      const invalidPassports = fileToStringArray(__dirname, 'input/invalid_examples.txt');

      it('invalidates all bad passports', () => {
        expect(passportProcessing(invalidPassports)[1]).toEqual(0);
      });
    });

    describe('valid passport examples', () => {
      const validPassports = fileToStringArray(__dirname, 'input/valid_examples.txt');

      it('validates all good passports', () => {
        expect(passportProcessing(validPassports)[1]).toEqual(4);
      });
    });

    describe('passport field validation', () => {
      it('validates date in range', () => {
        expect(hasValidDateInRange('byr', 'byr:2002', 1920, 2002)).toEqual(true);
        expect(hasValidDateInRange('byr', 'byr:2003', 1920, 2002)).toEqual(false);
      });

      it('validates height', () => {
        expect(hasValidHeight('hgt:60in')).toEqual(true);
        expect(hasValidHeight('hgt:190cm')).toEqual(true);
        expect(hasValidHeight('hgt:190in')).toEqual(false);
        expect(hasValidHeight('hgt:190')).toEqual(false);
      });

      it('validates hair color', () => {
        expect(hasValidHairColor('hcl:#123abc')).toEqual(true);
        expect(hasValidHairColor('hcl:#123abz')).toEqual(false);
        expect(hasValidHairColor('hcl:123abc')).toEqual(false);
      });

      it('validates eye color', () => {
        expect(hasValidEyeColor('ecl:brn')).toEqual(true);
        expect(hasValidEyeColor('ecl:wat')).toEqual(false);
      });

      it('validates passport id', () => {
        expect(hasValidPassportId('pid:000000001')).toEqual(true);
        expect(hasValidPassportId('pid:0123456789')).toEqual(false);
      });
    });
  });
});
