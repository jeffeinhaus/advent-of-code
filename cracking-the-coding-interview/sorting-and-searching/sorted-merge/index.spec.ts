import { sortInPlace } from '.';

describe('Sorted merge', () => {
  it('Merges two sorted arrays in place', () => {
    const arrayA = [1, 2, 3, 6, 7];
    const arrayB = [4, 5, 8, 9, 10];
    sortInPlace(arrayA, arrayB);
    expect(arrayA).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
