import { detectInfiniteLoop, fixBadInstruction } from '.';
import { fileToStringArray } from '@utils/file-reader';

describe('Handheld Halting', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');
  const example = fileToStringArray(__dirname, 'input/example.txt');

  describe(detectInfiniteLoop, () => {
    it('finds the accumulator value before the infinite loop begins', () => {
      expect(detectInfiniteLoop(example)[0]).toEqual(5);
    });

    it('finds the answer for the puzzle input', () => {
      expect(detectInfiniteLoop(puzzle)[0]).toEqual(1451);
    });
  });

  describe(fixBadInstruction, () => {
    it('finds the accumulator value after termination when fixing bad instruction', () => {
      expect(fixBadInstruction(example)).toEqual(8);
    });

    it('finds the answer for the puzzle input', () => {
      expect(fixBadInstruction(puzzle)).toEqual(1160);
    });
  });
});
