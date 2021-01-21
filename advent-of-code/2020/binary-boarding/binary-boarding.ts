export const maxSeatId = (boardingPasses: string[]): number =>
  Math.max(...boardingPasses.map((boardingPass) => computeSeatId(boardingPass)));

export const findMySeat = (boardingPasses: string[]): number => {
  const seats = boardingPasses
    .map((boardingPass) => computeSeatId(boardingPass))
    .sort((a, b) => a - b);

  for (let i = 0; i < seats.length - 1; i++) {
    if (seats[i + 1] - seats[i] === 2) {
      return seats[i] + 1;
    }
  }
  return 0;
};

export const computeSeatId = (boardingPass: string): number => {
  const [row, column] = findSeat(boardingPass);

  return row * 8 + column;
};

const findSeat = (boardingPass: string): [number, number] => {
  const rows = boardingPass.substring(0, 7);
  const columns = boardingPass.substring(7);
  const row = binarySearch(rows, 'F', 'B', 0, 127);
  const column = binarySearch(columns, 'L', 'R', 0, 7);

  return [row, column];
};

const binarySearch = (
  partitions: string,
  minRegion: string,
  maxRegion: string,
  minBound: number,
  maxBound: number,
): number => {
  [...partitions].forEach((binarySpacePartition: string) => {
    if (binarySpacePartition === minRegion) {
      maxBound -= Math.ceil((maxBound - minBound) / 2);
    } else if (binarySpacePartition === maxRegion) {
      minBound += Math.ceil((maxBound - minBound) / 2);
    }
  });

  return minBound;
};
