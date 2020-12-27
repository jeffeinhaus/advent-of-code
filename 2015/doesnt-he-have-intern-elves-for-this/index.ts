export const containsAtLeastThreeVowels = (toCheck: string): boolean => {
  const vowelsFound = toCheck.match(/[aeiou]/gi);
  return vowelsFound !== null && vowelsFound.length >= 3;
};

export const containsDoubleLetter = (toCheck: string): boolean =>
  RegExp(/([a-z])\1/i).test(toCheck);

export const containsSpecialSequences = (toCheck: string): boolean =>
  RegExp(/ab|cd|pq|xy/).test(toCheck);

export const containsNonOverlappingPair = (toCheck: string): boolean => {
  for (let i = 0; i < toCheck.length - 1; i++) {
    const pair = toCheck.substring(i, i + 2);
    for (let j = i + 2; j < toCheck.length - 1; j++) {
      if (pair === toCheck.substring(j, j + 2)) {
        return true;
      }
    }
  }
  return false;
};

export const containsRepeatedWithCharacterBetween = (toCheck: string): boolean => {
  for (let i = 0; i < toCheck.length - 2; i++) {
    if (toCheck.charAt(i) === toCheck.charAt(i + 2)) {
      return true;
    }
  }
  return false;
};

export const isNice = (toCheck: string): boolean =>
  containsAtLeastThreeVowels(toCheck) &&
  containsDoubleLetter(toCheck) &&
  !containsSpecialSequences(toCheck);

export const isNicePart2 = (toCheck: string): boolean =>
  containsNonOverlappingPair(toCheck) && containsRepeatedWithCharacterBetween(toCheck);

export const countNiceStrings = (strings: string[]): number => solver(strings, isNice);

export const countNicePart2Strings = (strings: string[]): number => solver(strings, isNicePart2);

const solver = (strings: string[], niceFunction: (toCheck: string) => boolean): number =>
  strings.filter(niceFunction).length;
