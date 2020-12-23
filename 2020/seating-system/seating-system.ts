export const findOccupiedSeatsAtEquilibrium = (
  seatingChart: string[][],
  strict: boolean,
  tolerance: number,
): number => {
  let updatedSeatingChart = seatingChart.map((row) => row.slice());
  let seatsChanged = 0;
  do {
    const previousSeatingChart = [...updatedSeatingChart];
    const adjacentOccupiedSeats: number[][] = getAdjacentOccupiedSeats(
      previousSeatingChart,
      strict,
    );

    seatsChanged = 0;
    [updatedSeatingChart, seatsChanged] = updateSeatingChart(
      previousSeatingChart,
      adjacentOccupiedSeats,
      tolerance,
    );
  } while (seatsChanged !== 0);

  const occupiedSeats = getOccupiedSeats(updatedSeatingChart);
  return occupiedSeats;
};

const updateSeatingChart = (
  seatingChart: string[][],
  adjacentOccupiedSeats: number[][],
  tolerance: number,
): [string[][], number] => {
  let seatsChanged = 0;
  const updatedSeatingChart = seatingChart.map((row) => row.slice());
  seatingChart.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (
        seatingChart[rowIndex][columnIndex] === 'L' &&
        adjacentOccupiedSeats[rowIndex][columnIndex] === 0
      ) {
        updatedSeatingChart[rowIndex][columnIndex] = '#';
        seatsChanged++;
      } else if (
        seatingChart[rowIndex][columnIndex] === '#' &&
        adjacentOccupiedSeats[rowIndex][columnIndex] >= tolerance
      ) {
        updatedSeatingChart[rowIndex][columnIndex] = 'L';
        seatsChanged++;
      }
    });
  });

  return [updatedSeatingChart, seatsChanged];
};

const getAdjacentOccupiedSeats = (seatingChart: string[][], strict: boolean): number[][] => {
  const adjactOccupiedSeats: number[][] = [];
  seatingChart.forEach((row, rowIndex) => {
    adjactOccupiedSeats.push(Array(seatingChart[rowIndex].length).fill(0));
    row.forEach((column, columnIndex) => {
      adjactOccupiedSeats[rowIndex][columnIndex] = strict
        ? findAdjacentOccupiedSeatsStrict(seatingChart, rowIndex, columnIndex)
        : findAdjacentOccupiedSeats(seatingChart, rowIndex, columnIndex);
    });
  });
  return adjactOccupiedSeats;
};

const getOccupiedSeats = (seatingChart: string[][]): number => {
  let occupiedSeats = 0;
  seatingChart.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (seatingChart[rowIndex][columnIndex] === '#') {
        occupiedSeats++;
      }
    });
  });
  return occupiedSeats;
};

export const findAdjacentOccupiedSeatsStrict = (
  seatingChart: string[][],
  row: number,
  column: number,
): number => {
  let numOccupiedSeats = 0;
  for (let i = column + 1; i < seatingChart[row].length; i++) {
    if (seatingChart[row][i] !== '.') {
      numOccupiedSeats = seatingChart[row][i] === '#' ? numOccupiedSeats + 1 : numOccupiedSeats;
      break;
    }
  }
  for (let i = column - 1; i >= 0; i--) {
    if (seatingChart[row][i] !== '.') {
      numOccupiedSeats = seatingChart[row][i] === '#' ? numOccupiedSeats + 1 : numOccupiedSeats;
      break;
    }
  }
  for (let i = row + 1; i < seatingChart.length; i++) {
    if (seatingChart[i][column] !== '.') {
      numOccupiedSeats = seatingChart[i][column] === '#' ? numOccupiedSeats + 1 : numOccupiedSeats;
      break;
    }
  }
  for (let i = row - 1; i >= 0; i--) {
    if (seatingChart[i][column] !== '.') {
      numOccupiedSeats = seatingChart[i][column] === '#' ? numOccupiedSeats + 1 : numOccupiedSeats;
      break;
    }
  }
  for (
    let i = row + 1, j = column + 1;
    i < seatingChart.length && j < seatingChart[row].length;
    i++, j++
  ) {
    if (seatingChart[i][j] !== '.') {
      numOccupiedSeats = seatingChart[i][j] === '#' ? numOccupiedSeats + 1 : numOccupiedSeats;
      break;
    }
  }
  for (let i = row + 1, j = column - 1; i < seatingChart.length && j >= 0; i++, j--) {
    if (seatingChart[i][j] !== '.') {
      numOccupiedSeats = seatingChart[i][j] === '#' ? numOccupiedSeats + 1 : numOccupiedSeats;
      break;
    }
  }
  for (let i = row - 1, j = column + 1; i >= 0 && j < seatingChart[row].length; i--, j++) {
    if (seatingChart[i][j] !== '.') {
      numOccupiedSeats = seatingChart[i][j] === '#' ? numOccupiedSeats + 1 : numOccupiedSeats;
      break;
    }
  }
  for (let i = row - 1, j = column - 1; i >= 0 && j >= 0; i--, j--) {
    if (seatingChart[i][j] !== '.') {
      numOccupiedSeats = seatingChart[i][j] === '#' ? numOccupiedSeats + 1 : numOccupiedSeats;
      break;
    }
  }
  return numOccupiedSeats;
};

const findAdjacentOccupiedSeats = (
  seatingChart: string[][],
  row: number,
  column: number,
): number => {
  let numOccupiedSeats = 0;
  if (row - 1 >= 0 && column - 1 >= 0 && seatingChart[row - 1][column - 1] === '#') {
    numOccupiedSeats++;
  }
  if (row - 1 >= 0 && seatingChart[row - 1][column] === '#') {
    numOccupiedSeats++;
  }
  if (
    row - 1 >= 0 &&
    column + 1 < seatingChart[row].length &&
    seatingChart[row - 1][column + 1] === '#'
  ) {
    numOccupiedSeats++;
  }
  if (column - 1 >= 0 && seatingChart[row][column - 1] === '#') {
    numOccupiedSeats++;
  }
  if (column + 1 < seatingChart[row].length && seatingChart[row][column + 1] === '#') {
    numOccupiedSeats++;
  }
  if (
    row + 1 < seatingChart.length &&
    column - 1 >= 0 &&
    seatingChart[row + 1][column - 1] === '#'
  ) {
    numOccupiedSeats++;
  }
  if (row + 1 < seatingChart.length && seatingChart[row + 1][column] === '#') {
    numOccupiedSeats++;
  }
  if (
    row + 1 < seatingChart.length &&
    column + 1 < seatingChart[row].length &&
    seatingChart[row + 1][column + 1] === '#'
  ) {
    numOccupiedSeats++;
  }
  return numOccupiedSeats;
};
