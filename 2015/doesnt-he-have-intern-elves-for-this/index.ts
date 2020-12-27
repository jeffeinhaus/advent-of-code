export const containsAtLeastThreeVowels = (toCheck: string): boolean => {
  const vowelsFound = toCheck.match(/[aeiou]/gi);
  return vowelsFound !== null && vowelsFound.length >= 3;
};

export const containsDoubleLetter = (toCheck: string): boolean =>
  RegExp(/([a-z])\1/i).test(toCheck);

export const containsSpecialSequences = (toCheck: string): boolean =>
  RegExp(/ab|cd|pq|xy/).test(toCheck);

export const isNice = (toCheck: string): boolean =>
  containsAtLeastThreeVowels(toCheck) &&
  containsDoubleLetter(toCheck) &&
  !containsSpecialSequences(toCheck);

export const countNiceStrings = (strings: string[]): number =>
  strings.filter((toCheck) => isNice(toCheck)).length;
