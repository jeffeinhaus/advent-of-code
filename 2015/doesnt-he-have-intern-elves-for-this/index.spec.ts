import {
  containsAtLeastThreeVowels,
  containsDoubleLetter,
  containsSpecialSequences,
  countNiceStrings,
  isNice,
} from '.';
import { fileToStringArray } from '@utils/file-reader';

describe("Doesn't He Have Intern-Elves For This?", () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');

  describe(containsAtLeastThreeVowels, () => {
    it('returns true if the string contains at least 3 vowels', () => {
      expect(containsAtLeastThreeVowels('aei')).toEqual(true);
      expect(containsAtLeastThreeVowels('xazegov')).toEqual(true);
      expect(containsAtLeastThreeVowels('aeiouaeiouaeiou')).toEqual(true);
    });

    it('returns false if the string contains less than 3 vowels', () => {
      expect(containsAtLeastThreeVowels('aey')).toEqual(false);
      expect(containsAtLeastThreeVowels('xazegyv')).toEqual(false);
      expect(containsAtLeastThreeVowels('qwrtyqwrtyqwrty')).toEqual(false);
    });
  });

  describe(containsDoubleLetter, () => {
    it('returns true if the string contains a letter that appears twice in a row', () => {
      expect(containsDoubleLetter('xx')).toEqual(true);
      expect(containsDoubleLetter('abcdde')).toEqual(true);
      expect(containsDoubleLetter('aabbccdd')).toEqual(true);
    });

    it('returns false if the string does not contain a letter that appears twice in a row', () => {
      expect(containsDoubleLetter('xy')).toEqual(false);
      expect(containsDoubleLetter('abcdef')).toEqual(false);
      expect(containsDoubleLetter('ababcdcd')).toEqual(false);
    });
  });

  describe(containsSpecialSequences, () => {
    it('returns true if the string contains ab, cd, pq, or xy', () => {
      expect(containsSpecialSequences('ab')).toEqual(true);
      expect(containsSpecialSequences('abcdde')).toEqual(true);
      expect(containsSpecialSequences('ababpqxyde')).toEqual(true);
    });

    it('returns false if the string does not contain ab, cd, pq, or xy', () => {
      expect(containsSpecialSequences('bc')).toEqual(false);
      expect(containsSpecialSequences('bdde')).toEqual(false);
      expect(containsSpecialSequences('bcbcpnoede')).toEqual(false);
    });
  });

  describe(isNice, () => {
    it('returns true if it has at least 3 vowels, contains a double letter, and does not contain a special sequence', () => {
      expect(isNice('ugknbfddgicrmopn')).toEqual(true);
      expect(isNice('aaa')).toEqual(true);
    });

    it('returns false if it does not meet the nice criteria', () => {
      expect(isNice('jchzalrnumimnmhp')).toEqual(false);
      expect(isNice('haegwjzuvuyypxyu')).toEqual(false);
      expect(isNice('dvszwmarrgswjxmb')).toEqual(false);
    });
  });

  describe(countNiceStrings, () => {
    it('counts the number of nice strings', () => {
      expect(countNiceStrings(puzzle)).toEqual(238);
    });
  });
});
