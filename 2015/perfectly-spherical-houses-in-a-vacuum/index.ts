type Position = {
  x: number;
  y: number;
};

export const splitStringEveryOther = (toSplit: string): [string, string] => {
  let first = '';
  let second = '';
  [...toSplit].forEach((character, index) => {
    if (index % 2 === 0) {
      first += character;
    } else {
      second += character;
    }
  });
  return [first, second];
};

const countUniquePositions = (route: string): Set<string> => {
  const currentPosition: Position = {
    x: 0,
    y: 0,
  };
  const uniquePositions = new Set([JSON.stringify(currentPosition)]);
  [...route].forEach((direction) => {
    if (direction === '^') {
      currentPosition.y++;
    } else if (direction === '>') {
      currentPosition.x++;
    } else if (direction === 'v') {
      currentPosition.y--;
    } else if (direction === '<') {
      currentPosition.x--;
    }
    uniquePositions.add(JSON.stringify(currentPosition));
  });

  return uniquePositions;
};

export const singleSanta = (route: string): number => countUniquePositions(route).size;

export const doubleSanta = (route: string): number => {
  const [realSanta, roboSanta] = splitStringEveryOther(route);
  return new Set([...countUniquePositions(realSanta), ...countUniquePositions(roboSanta)]).size;
};
