export const reportRepairDouble = (expenses: number[]): number => {
  for (let i = 0; i < expenses.length; i++) {
    for (let j = i + 1; j < expenses.length; j++) {
      if (expenses[i] + expenses[j] === 2020) {
        return expenses[i] * expenses[j];
      }
    }
  }

  return 0;
};

export const reportRepairTriple = (expenses: number[]): number => {
  for (let i = 0; i < expenses.length; i++) {
    for (let j = i + 1; j < expenses.length; j++) {
      for (let k = j + 1; k < expenses.length; k++) {
        if (expenses[i] + expenses[j] + expenses[k] === 2020) {
          return expenses[i] * expenses[j] * expenses[k];
        }
      }
    }
  }

  return 0;
};
