import { passwordPhilosophyCount, passwordPhilosophyLocation } from '.';
import { fileToStringArray } from '@utils/file-reader';

describe('Password Philosophy', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');
  const example = fileToStringArray(__dirname, 'input/example.txt');

  describe(passwordPhilosophyCount, () => {
    it('finds the number of valid passwords', () => {
      expect(passwordPhilosophyCount(example)).toEqual(2);
    });

    it('finds the answer for the puzzle input', () => {
      expect(passwordPhilosophyCount(puzzle)).toEqual(580);
    });
  });

  describe(passwordPhilosophyLocation, () => {
    it('finds the number of valid passwords', () => {
      expect(passwordPhilosophyLocation(example)).toEqual(1);
    });

    it('finds the answer for the puzzle input', () => {
      expect(passwordPhilosophyLocation(puzzle)).toEqual(611);
    });
  });
});
