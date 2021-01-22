import { sumFloatingMemoryValues, sumMemoryValues } from '.';
import { fileToStringArray } from '@utils/file-reader';

describe('Docking Data', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');
  const example1 = fileToStringArray(__dirname, 'input/example1.txt');
  const example2 = fileToStringArray(__dirname, 'input/example2.txt');

  describe(sumMemoryValues, () => {
    it('finds the sum of the non-zero values left in memory after applying the mask', () => {
      expect(sumMemoryValues(example1)).toEqual(165);
    });

    it('finds the answer for the puzzle input', () => {
      expect(sumMemoryValues(puzzle)).toEqual(18630548206046);
    });
  });

  describe(sumFloatingMemoryValues, () => {
    it('finds the sum of all possible non-zero values left in memory after applying floating mask', () => {
      expect(sumFloatingMemoryValues(example2)).toEqual(208);
    });

    it('finds the answer for the puzzle input', () => {
      expect(sumFloatingMemoryValues(puzzle)).toEqual(4254673508445);
    });
  });
});
