export const tobboganTrajectory = (slopes: string[], xTrajectory: number, yTrajectory: number): number => {
  let x = xTrajectory;
  let numTrees = 0;
  for(let i = yTrajectory; i < slopes.length; i += yTrajectory) {
    const slope = slopes[i];
    numTrees = slope.charAt(x) === '#' ? numTrees + 1 : numTrees;
    if (x + xTrajectory >= slope.length) {
      x = (x + xTrajectory) - slope.length;
    } else {
      x += xTrajectory;
    }
  }
  
  return numTrees;
}

