import { isUniqueDataStructure, isUniqueDoubleLoops, isUniqueFilter, isUniqueSorted } from '.';

describe('Is Unique', () => {
  describe(isUniqueDoubleLoops, () => {
    it('returns true if a string has all unique characters', () => {
      expect(isUniqueDoubleLoops('qwerty')).toEqual(true);
      expect(isUniqueDoubleLoops('abcdefghijklmnopqrstuvwxyz')).toEqual(true);
      expect(isUniqueDoubleLoops('123abc')).toEqual(true);
      expect(isUniqueDoubleLoops('aAbBcCdD')).toEqual(true);
      expect(isUniqueDoubleLoops('abc def')).toEqual(true);
    });

    it('returns false if a string does not have all unique characters', () => {
      expect(isUniqueDoubleLoops('qqqq')).toEqual(false);
      expect(isUniqueDoubleLoops('abcdefghijklamnopqrstuvwxyz')).toEqual(false);
      expect(isUniqueDoubleLoops('123abc321')).toEqual(false);
      expect(isUniqueDoubleLoops('aAAbBcCdD')).toEqual(false);
      expect(isUniqueDoubleLoops('The quick brown fox jumped over the lazy dog')).toEqual(false);
    });
  });

  describe(isUniqueDataStructure, () => {
    it('returns true if a string has all unique characters', () => {
      expect(isUniqueDataStructure('qwerty')).toEqual(true);
      expect(isUniqueDataStructure('abcdefghijklmnopqrstuvwxyz')).toEqual(true);
      expect(isUniqueDataStructure('123abc')).toEqual(true);
      expect(isUniqueDataStructure('aAbBcCdD')).toEqual(true);
      expect(isUniqueDataStructure('abc def')).toEqual(true);
    });

    it('returns false if a string does not have all unique characters', () => {
      expect(isUniqueDataStructure('qqqq')).toEqual(false);
      expect(isUniqueDataStructure('abcdefghijklamnopqrstuvwxyz')).toEqual(false);
      expect(isUniqueDataStructure('123abc321')).toEqual(false);
      expect(isUniqueDataStructure('aAAbBcCdD')).toEqual(false);
      expect(isUniqueDataStructure('The quick brown fox jumped over the lazy dog')).toEqual(false);
    });
  });

  describe(isUniqueSorted, () => {
    it('returns true if a string has all unique characters', () => {
      expect(isUniqueSorted('qwerty')).toEqual(true);
      expect(isUniqueSorted('abcdefghijklmnopqrstuvwxyz')).toEqual(true);
      expect(isUniqueSorted('123abc')).toEqual(true);
      expect(isUniqueSorted('aAbBcCdD')).toEqual(true);
      expect(isUniqueSorted('abc def')).toEqual(true);
    });

    it('returns false if a string does not have all unique characters', () => {
      expect(isUniqueSorted('qqqq')).toEqual(false);
      expect(isUniqueSorted('abcdefghijklamnopqrstuvwxyz')).toEqual(false);
      expect(isUniqueSorted('123abc321')).toEqual(false);
      expect(isUniqueSorted('aAAbBcCdD')).toEqual(false);
      expect(isUniqueSorted('The quick brown fox jumped over the lazy dog')).toEqual(false);
    });
  });

  describe(isUniqueFilter, () => {
    it('returns true if a string has all unique characters', () => {
      expect(isUniqueFilter('qwerty')).toEqual(true);
      expect(isUniqueFilter('abcdefghijklmnopqrstuvwxyz')).toEqual(true);
      expect(isUniqueFilter('123abc')).toEqual(true);
      expect(isUniqueFilter('aAbBcCdD')).toEqual(true);
      expect(isUniqueFilter('abc def')).toEqual(true);
    });

    it('returns false if a string does not have all unique characters', () => {
      expect(isUniqueFilter('qqqq')).toEqual(false);
      expect(isUniqueFilter('abcdefghijklamnopqrstuvwxyz')).toEqual(false);
      expect(isUniqueFilter('123abc321')).toEqual(false);
      expect(isUniqueFilter('aAAbBcCdD')).toEqual(false);
      expect(isUniqueFilter('The quick brown fox jumped over the lazy dog')).toEqual(false);
    });
  });
});
