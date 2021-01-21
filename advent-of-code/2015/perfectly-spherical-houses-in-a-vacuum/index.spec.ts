import { doubleSanta, singleSanta, splitStringEveryOther } from '.';
import { fileToStringArray } from '@utils/file-reader';

describe('Perfectly Spherical Houses in a Vacuum', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt')[0];

  describe(splitStringEveryOther, () => {
    it('splits a string into two strings where characters at odd and even positions are separated', () => {
      expect(splitStringEveryOther('^v^v')).toEqual(['^^', 'vv']);
    });
  });

  describe(singleSanta, () => {
    it('counts the number of locations that santa visits at least once', () => {
      expect(singleSanta('>')).toEqual(2);
      expect(singleSanta('^>v<')).toEqual(4);
      expect(singleSanta('^v^v^v^v^v')).toEqual(2);
    });

    it('finds the answer for the puzzle input', () => {
      expect(singleSanta(puzzle)).toEqual(2081);
    });
  });

  describe(doubleSanta, () => {
    it('counts the number of locations that are visisted at least once with two santas alternating directions', () => {
      expect(doubleSanta('^v')).toEqual(3);
      expect(doubleSanta('^>v<')).toEqual(3);
      expect(doubleSanta('^v^v^v^v^v')).toEqual(11);
    });

    it('finds the answer for the puzzle input', () => {
      expect(doubleSanta(puzzle)).toEqual(2341);
    });
  });
});
