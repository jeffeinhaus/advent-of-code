import {
  Dimensions,
  calculateTotalRibbon,
  calculateTotalWrappingPaper,
  convertToDimensions,
} from '.';
import { fileToStringArray } from '@utils/file-reader';

describe('I Was Told There Would Be No Math', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');

  describe(convertToDimensions, () => {
    it('converts the string dimensions to a dimensions object', () => {
      const dimensions = convertToDimensions('2x3x4');
      expect(dimensions).toBeInstanceOf(Dimensions);
      expect(dimensions.length).toEqual(2);
      expect(dimensions.width).toEqual(3);
      expect(dimensions.height).toEqual(4);
    });
  });

  describe(Dimensions, () => {
    const dimensions = new Dimensions(2, 3, 4);
    describe('calculateSurfaceArea', () => {
      it('calculates the surface area of a dimensions object', () => {
        expect(dimensions.calculateSurfaceArea()).toEqual(2 * 6 + 2 * 12 + 2 * 8);
      });
    });

    describe('calculateAreaSmallestSide', () => {
      it('calculates the area of the smallest side', () => {
        expect(dimensions.calculateAreaSmallestSide()).toEqual(2 * 3);
      });
    });

    describe('calculateSmallestPerimeter', () => {
      it('calculates the perimeter of the smallest side', () => {
        expect(dimensions.calculateSmallestPerimeter()).toEqual(2 + 2 + 3 + 3);
      });
    });

    describe('calculateVolume', () => {
      it('calculates the volume', () => {
        expect(dimensions.calculateVolume()).toEqual(2 * 3 * 4);
      });
    });
  });

  describe(calculateTotalWrappingPaper, () => {
    it('returns the surface area of the box plus the area of the smallest side', () => {
      expect(calculateTotalWrappingPaper(['2x3x4', '1x1x10'])).toEqual(58 + 43);
    });

    it('returns the answer for the puzzle input', () => {
      expect(calculateTotalWrappingPaper(puzzle)).toEqual(1606483);
    });
  });

  describe(calculateTotalRibbon, () => {
    it('returns the total amount of ribbon required to wrap the presents', () => {
      expect(calculateTotalRibbon(['2x3x4', '1x1x10'])).toEqual(34 + 14);
    });

    it('returns the answer for the puzzle input', () => {
      expect(calculateTotalRibbon(puzzle)).toEqual(3842356);
    });
  });
});
