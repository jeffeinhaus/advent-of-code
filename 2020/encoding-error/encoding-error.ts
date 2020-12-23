export const findFirstInvalidNumber = (data: number[], preambleLength: number): number => {
  for (let i = preambleLength; i < data.length; i++) {
    if (!findSum(data.slice(i - preambleLength, i), data[i])) {
      return data[i];
    }
  }

  return 0;
};

export const findEncryptionWeakness = (data: number[], preambleLength: number): number => {
  const target = findFirstInvalidNumber(data, preambleLength);
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
    for (let j = i + 1; j < data.length; j++) {
      sum += data[j];
      if (sum === target) {
        const range = data.slice(i, j + 1);
        return Math.min(...range) + Math.max(...range);
      }
    }
    sum = 0;
  }
  return 0;
};

const findSum = (data: number[], target: number): boolean => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data.length; j++) {
      if (data[i] + data[j] === target) {
        return true;
      }
    }
  }

  return false;
};
