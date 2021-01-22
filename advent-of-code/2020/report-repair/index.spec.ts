import { reportRepairDouble, reportRepairTriple } from '.';
import { fileToNumArray } from '@utils/file-reader';

describe('Report Repair', () => {
  const puzzle = fileToNumArray(__dirname, 'input/puzzle.txt');
  const example = fileToNumArray(__dirname, 'input/example.txt');

  describe(reportRepairDouble, () => {
    it('finds the two numbers that sum to 2020 and multiplies them', () => {
      expect(reportRepairDouble(example)).toEqual(1721 * 299);
    });

    it('finds the answer for the puzzle input', () => {
      expect(reportRepairDouble(puzzle)).toEqual(158916);
    });
  });

  describe(reportRepairTriple, () => {
    it('finds the three numbers that sum to 2020 and multiplies them', () => {
      expect(reportRepairTriple(example)).toEqual(979 * 366 * 675);
    });

    it('finds the answer for the puzzle input', () => {
      expect(reportRepairTriple(puzzle)).toEqual(165795564);
    });
  });
});
