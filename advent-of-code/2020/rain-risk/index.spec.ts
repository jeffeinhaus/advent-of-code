import { calculateManhattanDistance } from '.';
import { fileToStringArray } from '@utils/file-reader';

describe('Rain Risk', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');
  const example = fileToStringArray(__dirname, 'input/example.txt');

  describe(calculateManhattanDistance, () => {
    it('finds the manhattan distance of the final coordinates', () => {
      const result = calculateManhattanDistance(example);
      expect(result).toEqual(25);
    });

    it('finds the answer for the puzzle input', () => {
      expect(calculateManhattanDistance(puzzle)).toEqual(1710);
    });
  });
});
