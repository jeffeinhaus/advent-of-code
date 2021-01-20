export const sortInPlace = (a: number[], b: number[]): void => {
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;

  for (let i = 0; i < b.length; i++) {
    a.push(0);
  }
  let currentIndex = a.length - 1;

  /*
   * starting at the back
   * compare a[length - 1] and b[length - 1]
   * put the biggest one in the last position of a
   * repeat going backwards
   */
  while (bIndex >= 0) {
    if (a[aIndex] >= b[bIndex]) {
      a[currentIndex] = a[aIndex];
      aIndex--;
    } else {
      a[currentIndex] = b[bIndex];
      bIndex--;
    }
    currentIndex--;
  }
};
