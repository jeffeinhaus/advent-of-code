import { tobboganTrajectory } from './tobbogan-trajectory';
import { fileToStringArray } from '@utils/file-reader';

describe('Tobbogan Trajectory', () => {

  let input: string[] = [];
  beforeAll(() => {
    input = fileToStringArray(__dirname, 'puzzle_input.txt');
  });

  const testInput = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ];

  describe(tobboganTrajectory, () => {
    it('finds the number of trees you would encounter with a slope of 3 right 1 down', () => {
      const result = tobboganTrajectory(testInput, 3, 1);
      expect(result).toEqual(7);
    });
  
    it('finds the answer for the part 1 puzzle input', () => {
      const result = tobboganTrajectory(input, 3, 1);
      console.log(result);
      expect(result).not.toEqual(0);
    });

    it('multiplies the number of trees you would encounter for multiple trajectories', () => {
      const results = [
        tobboganTrajectory(testInput, 1, 1),
        tobboganTrajectory(testInput, 3, 1),
        tobboganTrajectory(testInput, 5, 1),
        tobboganTrajectory(testInput, 7, 1),
        tobboganTrajectory(testInput, 1, 2),
      ];
      expect(results[0]).toEqual(2);
      expect(results[1]).toEqual(7);
      expect(results[2]).toEqual(3);
      expect(results[3]).toEqual(4);
      expect(results[4]).toEqual(2);
      expect(results.reduce((a, b) => a * b)).toEqual(336);
    });

    it('finds the answer for the part 2 puzzle input', () => {
      const results = [
        tobboganTrajectory(input, 1, 1),
        tobboganTrajectory(input, 3, 1),
        tobboganTrajectory(input, 5, 1),
        tobboganTrajectory(input, 7, 1),
        tobboganTrajectory(input, 1, 2),
      ];
      const result = results.reduce((a, b) => a * b);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });
})