import { fileToStringArray } from '@utils/file-reader';
import { tobboganTrajectory } from '.';

describe('Tobbogan Trajectory', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');
  const example = fileToStringArray(__dirname, 'input/example.txt');

  describe(tobboganTrajectory, () => {
    it('finds the number of trees you would encounter with a slope of 3 right 1 down', () => {
      expect(tobboganTrajectory(example, 3, 1)).toEqual(7);
    });

    it('finds the answer for the part 1 puzzle input', () => {
      expect(tobboganTrajectory(puzzle, 3, 1)).toEqual(254);
    });

    it('multiplies the number of trees you would encounter for multiple trajectories', () => {
      const results = [
        tobboganTrajectory(example, 1, 1),
        tobboganTrajectory(example, 3, 1),
        tobboganTrajectory(example, 5, 1),
        tobboganTrajectory(example, 7, 1),
        tobboganTrajectory(example, 1, 2),
      ];
      expect(results).toEqual(expect.arrayContaining([2, 7, 3, 4, 2]));
      expect(results.reduce((a, b) => a * b)).toEqual(336);
    });

    it('finds the answer for the part 2 puzzle input', () => {
      const results = [
        tobboganTrajectory(puzzle, 1, 1),
        tobboganTrajectory(puzzle, 3, 1),
        tobboganTrajectory(puzzle, 5, 1),
        tobboganTrajectory(puzzle, 7, 1),
        tobboganTrajectory(puzzle, 1, 2),
      ];
      const result = results.reduce((a, b) => a * b);
      expect(result).toEqual(1666768320);
    });
  });
});
