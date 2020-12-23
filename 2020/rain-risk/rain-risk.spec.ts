import { calculateManhattanDistance } from './rain-risk';
import { fileToStringArray } from '@utils/file-reader';

describe('Rain Risk', () => {
  let input: string[] = [];
  beforeAll(() => {
    input = fileToStringArray(__dirname, 'puzzle_input.txt');
  });

  const testInput = ['F10', 'N3', 'F7', 'R90', 'F11'];

  describe(calculateManhattanDistance, () => {
    it('finds the manhattan distance of the final coordinates', () => {
      const result = calculateManhattanDistance(testInput);
      expect(result).toEqual(25);
    });

    it('finds the answer for the puzzle input', () => {
      const result = calculateManhattanDistance(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });
});
