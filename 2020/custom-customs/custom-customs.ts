export const customCustomsLoose = (forms: string[]): number => {
  let currentForm = '';
  let sum = 0;
  forms.forEach((form) => {
    if (form) {
      currentForm += form;
    } else {
      sum += new Set(currentForm).size;
      currentForm = '';
    }
  });
  
  return sum;
};

export const customCustomsStrict = (forms: string[]): number => {
  let currentForm = new Array(26).fill(0);
  let rowCount = 0;
  let sum = 0;
  forms.forEach((form) => {
    if (form) {
      [...form].forEach((answer) => {
        const index = answer.charCodeAt(0) - 97;
        currentForm[index]++;
      });
      rowCount++;
    } else {
      sum += currentForm.filter((answer) => answer === rowCount).length;
      currentForm = new Array(26).fill(0);
      rowCount = 0;
    }
  });
  
  return sum;
};


