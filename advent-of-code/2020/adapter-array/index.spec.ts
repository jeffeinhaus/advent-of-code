import { adapterArray, findAllPossibleArrays } from '.';
import { fileToNumArray } from '@utils/file-reader';

describe('Adapter Array', () => {
  const puzzle = fileToNumArray(__dirname, 'input/puzzle.txt');
  const example1 = fileToNumArray(__dirname, 'input/example1.txt');
  const example2 = fileToNumArray(__dirname, 'input/example2.txt');

  describe(adapterArray, () => {
    it('finds the number of 1-jolt differences multiplied by the number of 3-jolt differences', () => {
      expect(adapterArray(example1)).toEqual(7 * 5);
      expect(adapterArray(example2)).toEqual(22 * 10);
    });

    it('finds the answer for the puzzle input', () => {
      expect(adapterArray(puzzle)).toEqual(2343);
    });
  });

  describe(findAllPossibleArrays, () => {
    it('finds the number of all possible arrays for the joltages', () => {
      expect(findAllPossibleArrays(example1)).toEqual(8);
      expect(findAllPossibleArrays(example2)).toEqual(19208);
    });

    it('finds the solution for the puzzle input', () => {
      expect(findAllPossibleArrays(puzzle)).toEqual(31581162962944);
    });
  });
});
