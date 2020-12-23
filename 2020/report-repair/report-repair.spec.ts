import { reportRepairDouble, reportRepairTriple } from './report-repair';
import { fileToNumArray } from '@utils/file-reader';

describe('Report Repair', () => {
  let input: number[] = [];
  beforeAll(() => {
    input = fileToNumArray(__dirname, 'puzzle_input.txt');
  });

  const testInput = [1721, 979, 366, 299, 675, 1456];

  describe(reportRepairDouble, () => {
    it('finds the two numbers that sum to 2020 and multiplies them', () => {
      const result = reportRepairDouble(testInput);
      expect(result).toEqual(1721 * 299);
    });

    it('finds the answer for the puzzle input', () => {
      const result = reportRepairDouble(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });

  describe(reportRepairTriple, () => {
    it('finds the three numbers that sum to 2020 and multiplies them', () => {
      const result = reportRepairTriple(testInput);
      expect(result).toEqual(979 * 366 * 675);
    });

    it('finds the answer for the puzzle input', () => {
      const result = reportRepairTriple(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });
});
