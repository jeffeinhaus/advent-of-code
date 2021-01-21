import { findSmallestHashWithNLeadingZeroes } from '.';

describe('The Ideal Stocking Stuffer', () => {
  describe(findSmallestHashWithNLeadingZeroes, () => {
    it('finds the lowest positive number that generates an md5 hash with n leading zeroes', () => {
      expect(findSmallestHashWithNLeadingZeroes(5, 'abcdef')).toEqual(609043);
      expect(findSmallestHashWithNLeadingZeroes(5, 'pqrstuv')).toEqual(1048970);
      expect(findSmallestHashWithNLeadingZeroes(5, 'yzbqklnj')).toEqual(282749);
      expect(findSmallestHashWithNLeadingZeroes(6, 'yzbqklnj')).toEqual(9962624);
    });
  });
});
