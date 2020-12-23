import { passwordPhilosophyCount, passwordPhilosophyLocation } from './password-philosopy';
import { fileToStringArray } from '@utils/file-reader';

describe('Password Philosophy', () => {
  let input: string[] = [];
  beforeAll(() => {
    input = fileToStringArray(__dirname, 'puzzle_input.txt');
  });

  const testInput = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

  describe(passwordPhilosophyCount, () => {
    it('finds the number of valid passwords', () => {
      const result = passwordPhilosophyCount(testInput);
      expect(result).toEqual(2);
    });

    it('finds the answer for the puzzle input', () => {
      const result = passwordPhilosophyCount(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });

  describe(passwordPhilosophyLocation, () => {
    it('finds the number of valid passwords', () => {
      const result = passwordPhilosophyLocation(testInput);
      expect(result).toEqual(1);
    });

    it('finds the answer for the puzzle input', () => {
      const result = passwordPhilosophyLocation(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });
});
