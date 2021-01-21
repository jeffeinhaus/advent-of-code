import { adapterArray, findAllPossibleArrays } from './adapter-array';
import { fileToNumArray } from '@utils/file-reader';

describe('Adapter Array', () => {
  let input: number[] = [];
  beforeAll(() => {
    input = fileToNumArray(__dirname, 'puzzle_input.txt');
  });

  const testInput = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];

  const testInput2 = [
    28,
    33,
    18,
    42,
    31,
    14,
    46,
    20,
    48,
    47,
    24,
    23,
    49,
    45,
    19,
    38,
    39,
    11,
    1,
    32,
    25,
    35,
    8,
    17,
    7,
    9,
    4,
    2,
    34,
    10,
    3,
  ];

  describe(adapterArray, () => {
    it('finds the number of 1-jolt differences multiplied by the number of 3-jolt differences', () => {
      expect(adapterArray(testInput)).toEqual(7 * 5);
      expect(adapterArray(testInput2)).toEqual(22 * 10);
    });

    it('finds the answer for the puzzle input', () => {
      const result = adapterArray(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });

  describe(findAllPossibleArrays, () => {
    it('finds the number of all possible arrays for the joltages', () => {
      expect(findAllPossibleArrays(testInput)).toEqual(8);
      expect(findAllPossibleArrays(testInput2)).toEqual(19208);
    });

    it('finds the solution for the puzzle input', () => {
      const result = findAllPossibleArrays(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });
});
