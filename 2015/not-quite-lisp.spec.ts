import { climbStairs, findBasement } from './not-quite-lisp';
import { fileToStringArray } from '@utils/file-reader';

describe('Not Quite Lisp', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt')[0];

  describe(climbStairs, () => {
    it('increments the floor on ( and decrements the floor on )', () => {
      expect(climbStairs('(())')).toEqual(0);
      expect(climbStairs('()()')).toEqual(0);
      expect(climbStairs('(((')).toEqual(3);
      expect(climbStairs('(()(()(')).toEqual(3);
      expect(climbStairs('))(((((')).toEqual(3);
      expect(climbStairs('())')).toEqual(-1);
      expect(climbStairs('))(')).toEqual(-1);
      expect(climbStairs(')))')).toEqual(-3);
      expect(climbStairs(')())())')).toEqual(-3);
    });

    it('finds the floor for the puzzle input', () => {
      expect(climbStairs(puzzle)).toEqual(280);
    });
  });

  describe(findBasement, () => {
    it('finds the position of the first character that causes santa to go to the basement (floor = -1)', () => {
      expect(findBasement(')')).toEqual(1);
      expect(findBasement('()())')).toEqual(5);
    });

    it('finds the position for the puzzle input', () => {
      expect(findBasement(puzzle)).toEqual(1797);
    });
  });
});
