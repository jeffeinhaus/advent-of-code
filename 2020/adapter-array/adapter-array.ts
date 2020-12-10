export const adapterArray = (joltages: number[]): number => {
  const sortedJoltages = [...joltages].sort((a, b) => a - b);
  let oneDiffs = 0;
  let threeDiffs = 1;
  let prev = 0;

  sortedJoltages.forEach((joltage) => {
    if (joltage - 1 === prev) {
      oneDiffs++;
    } else if (joltage - 3 === prev) {
      threeDiffs++;
    }
    prev = joltage;
  });

  return oneDiffs * threeDiffs;
};

export const findAllPossibleArrays = (joltages: number[]): number => {
  const sortedJoltages = [...joltages].sort((a, b) => a - b);
  sortedJoltages.unshift(0);

  let possibleCombinations = 1;

  let i = 0;
  while (i < sortedJoltages.length) {
    if (isContiguousRange(sortedJoltages.slice(i, i + 4), 3)) {
        possibleCombinations *= 2;
        i += 3;
    } else if (isContiguousRange(sortedJoltages.slice(i, i + 5), 4)) {
        possibleCombinations *= 4;
        i += 4;
    } else if (isContiguousRange(sortedJoltages.slice(i, i + 6), 5)) {
        possibleCombinations *= 7;
        i += 5;
    } else {
      i++;
    }
  }

  return possibleCombinations;
}

const isContiguousRange = (joltages: number[], rangeLength: number): boolean => {
  return (joltages[0] + rangeLength - 1 === joltages[rangeLength - 1]
    && joltages[0] + rangeLength != joltages[rangeLength]);
}

