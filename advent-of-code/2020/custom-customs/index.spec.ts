import { customCustomsLoose, customCustomsStrict } from '.';
import { fileToStringArray } from '@utils/file-reader';

describe('Custom Customs', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');
  const example = fileToStringArray(__dirname, 'input/example.txt');

  describe(customCustomsLoose, () => {
    it('finds the sum of the counts of the number of questions answered yes by each group', () => {
      expect(customCustomsLoose(example)).toEqual(11);
    });

    it('finds the answer for the puzzle input', () => {
      expect(customCustomsLoose(puzzle)).toEqual(6686);
    });
  });

  describe(customCustomsStrict, () => {
    it('finds the sum of the counts of the number of questions answered yes by each group', () => {
      expect(customCustomsStrict(example)).toEqual(6);
    });

    it('finds the answer for the puzzle input', () => {
      expect(customCustomsStrict(puzzle)).toEqual(3476);
    });
  });
});
