import { createHash } from 'crypto';

export const findSmallestHashWithNLeadingZeroes = (leadingZeroes: number, key: string): number => {
  let count = -1;
  while (!computeHash(`${key}${++count}`).startsWith('0'.repeat(leadingZeroes))) {}
  return count;
};

const computeHash = (toHash: string): string => createHash('md5').update(toHash).digest('hex');
