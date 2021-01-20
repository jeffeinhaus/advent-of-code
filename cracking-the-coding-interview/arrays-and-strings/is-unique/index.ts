export const isUniqueDoubleLoops = (sequence: string): boolean => {
  for (let i = 0; i < sequence.length; i++) {
    for (let j = i + 1; j < sequence.length; j++) {
      if (sequence.charAt(i) === sequence.charAt(j)) {
        return false;
      }
    }
  }
  return true;
};

export const isUniqueDataStructure = (sequence: string): boolean => {
  const characterSet = new Set();
  for (let i = 0; i < sequence.length; i++) {
    if (characterSet.has(sequence.charAt(i))) {
      return false;
    }
    characterSet.add(sequence.charAt(i));
  }
  return true;
};

export const isUniqueSorted = (sequence: string): boolean => {
  const sortedSequence = [...sequence].sort();
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sortedSequence[i] === sortedSequence[i + 1]) {
      return false;
    }
  }

  return true;
};

export const isUniqueFilter = (sequence: string): boolean => {
  const filteredSequence = [...sequence].filter(
    (character, index) =>
      !sequence.substring(0, index).includes(character) &&
      !sequence.substring(index + 1, sequence.length).includes(character),
  );
  return filteredSequence.length === sequence.length;
};
