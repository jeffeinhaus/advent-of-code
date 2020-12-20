export const calculateManhattanDistance = (directions: string[]): number => {
  let x: number = 0, y: number = 0;
  let currentDirection: number = 0;
  directions.forEach((direction) => {
    const value = Number(direction.substring(1));
    if (direction.charAt(0) === 'N') {
      y -= value;
    } else if (direction.charAt(0) === 'S') {
      y += value;
    } else if (direction.charAt(0) === 'E') {
      x += value;
    } else if (direction.charAt(0) === 'W') {
      x -= value;
    } else if (direction.charAt(0) === 'L') {
      if (currentDirection - value >= 0) { 
        currentDirection -= value;
      } else {
        currentDirection = 360 - Math.abs(currentDirection - value);
      }
    } else if (direction.charAt(0) === 'R') {
      if (currentDirection + value <= 270) {
        currentDirection += value;
      } else {
        currentDirection = (currentDirection + value) % 360;
      }
   } else if (direction.charAt(0) === 'F') {
      if (currentDirection === 0) {
        x += value;
      } else if (currentDirection === 180) {
        x -= value;
      } else if (currentDirection === 90) {
        y += value;
      } else {
        y -= value;
      }
    }
  });

  return Math.abs(x) + Math.abs(y);
};