export const climbStairs = (stairs: string): number => {
  let floor = 0;
  [...stairs].forEach((stair) => {
    floor = stair === '(' ? floor + 1 : floor - 1;
  });
  return floor;
};

export const findBasement = (stairs: string): number => {
  let pos = 0;
  let floor = 0;
  while (floor >= 0) {
    floor = stairs.charAt(pos) === '(' ? floor + 1 : floor - 1;
    pos++;
  }

  return pos;
};
