import { findEncryptionWeakness, findFirstInvalidNumber } from './encoding-error';
import { fileToNumArray } from '@utils/file-reader';

describe('Custom Customs', () => {
  let input: number[] = [];
  beforeAll(() => {
    input = fileToNumArray(__dirname, 'puzzle_input.txt');
  });

  const testInput = [
    35,
    20,
    15,
    25,
    47,
    40,
    62,
    55,
    65,
    95,
    102,
    117,
    150,
    182,
    127,
    219,
    299,
    277,
    309,
    576,
  ];

  describe(findFirstInvalidNumber, () => {
    it('finds the first number in the sequence that does not have two numbers in the previous preamble that sum to it', () => {
      expect(findFirstInvalidNumber(testInput, 5)).toEqual(127);
    });

    it('finds the answer for the puzzle input', () => {
      const result = findFirstInvalidNumber(input, 25);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });

  describe(findEncryptionWeakness, () => {
    it('finds the sum of the smallest and largest number in the contiguous range that adds to the first invalid number', () => {
      expect(findEncryptionWeakness(testInput, 5)).toEqual(62);
    });

    it('finds the answer for the puzzle input', () => {
      const result = findEncryptionWeakness(input, 25);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });
});
