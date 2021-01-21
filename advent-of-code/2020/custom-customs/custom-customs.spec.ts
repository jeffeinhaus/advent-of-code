import { customCustomsLoose, customCustomsStrict } from './custom-customs';
import { fileToStringArray } from '@utils/file-reader';

describe('Custom Customs', () => {
  let input: string[] = [];
  beforeAll(() => {
    input = fileToStringArray(__dirname, 'puzzle_input.txt');
  });

  const testInput = ['abc', '', 'a', 'b', 'c', '', 'ab', 'ac', '', 'a', 'a', 'a', 'a', '', 'b', ''];

  describe(customCustomsLoose, () => {
    it('finds the sum of the counts of the number of questions answered yes by each group', () => {
      expect(customCustomsLoose(testInput)).toEqual(11);
    });

    it('finds the answer for the puzzle input', () => {
      const result = customCustomsLoose(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });

  describe(customCustomsStrict, () => {
    it('finds the sum of the counts of the number of questions answered yes by each group', () => {
      expect(customCustomsStrict(testInput)).toEqual(6);
    });

    it('finds the answer for the puzzle input', () => {
      const result = customCustomsStrict(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });
});
