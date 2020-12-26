import { createHash } from 'crypto';

export const findSmallestHashWithNLeadingZeroes = (leadingZeroes: number, key: string): number => {
  let count = -1;
  let hash = '';
  while (!hash.startsWith('0'.repeat(leadingZeroes))) {
    hash = createHash('md5')
      .update(`${key}${++count}`)
      .digest('hex');
  }
  return count;
};
