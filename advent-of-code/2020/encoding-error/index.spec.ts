import { findEncryptionWeakness, findFirstInvalidNumber } from '.';
import { fileToNumArray } from '@utils/file-reader';

describe('Custom Customs', () => {
  const puzzle = fileToNumArray(__dirname, 'input/puzzle.txt');
  const example = fileToNumArray(__dirname, 'input/example.txt');

  describe(findFirstInvalidNumber, () => {
    it('finds the first number in the sequence that does not have two numbers in the previous preamble that sum to it', () => {
      expect(findFirstInvalidNumber(example, 5)).toEqual(127);
    });

    it('finds the answer for the puzzle input', () => {
      expect(findFirstInvalidNumber(puzzle, 25)).toEqual(258585477);
    });
  });

  describe(findEncryptionWeakness, () => {
    it('finds the sum of the smallest and largest number in the contiguous range that adds to the first invalid number', () => {
      expect(findEncryptionWeakness(example, 5)).toEqual(62);
    });

    it('finds the answer for the puzzle input', () => {
      expect(findEncryptionWeakness(puzzle, 25)).toEqual(36981213);
    });
  });
});
