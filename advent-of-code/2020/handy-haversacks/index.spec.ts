import { findBagsContainedByShinyGold, findBagsThatCanContainShinyGold } from '.';
import { fileToStringArray } from '@utils/file-reader';

describe('Handy Haversacks', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');
  const example1 = fileToStringArray(__dirname, 'input/example1.txt');
  const example2 = fileToStringArray(__dirname, 'input/example2.txt');

  describe(findBagsThatCanContainShinyGold, () => {
    it('finds the number of bags that can contain a shiny gold bag', () => {
      expect(findBagsThatCanContainShinyGold(example1)).toEqual(4);
    });

    it('finds the answer for the puzzle input', () => {
      expect(findBagsThatCanContainShinyGold(puzzle)).toEqual(121);
    });
  });

  describe(findBagsContainedByShinyGold, () => {
    it('finds the number of bags contained inside a shiny gold bag', () => {
      expect(findBagsContainedByShinyGold(example1)).toEqual(32);
      expect(findBagsContainedByShinyGold(example2)).toEqual(126);
    });

    it('finds the answer for the puzzle input', () => {
      expect(findBagsContainedByShinyGold(puzzle)).toEqual(3805);
    });
  });
});
