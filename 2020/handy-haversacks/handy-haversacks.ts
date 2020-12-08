export const handyHaversacks = (rules: string[]): number => {
  const rulesDictionary = createRulesDictionary(rules);
  
  const canContainShinyGold = [...rulesDictionary['shiny gold']];
  let numAdded = 0;
  do {
    numAdded = 0;
    canContainShinyGold.forEach((bagType) => {
      if (rulesDictionary[bagType]) {
        rulesDictionary[bagType].forEach((bag) => {
          if (!canContainShinyGold.includes(bag)) {
            canContainShinyGold.push(bag);
            numAdded++;
          }
        })
      }
    });
  } while (numAdded != 0);

  return canContainShinyGold.length;
};

const createRulesDictionary = (rules: string[]): Record<string, string[]> => {
  const rulesDictionary: Record<string, string[]> = {};
  rules.forEach((rule) => {
    const [bag, containable] = rule.split('contain');
    const containables = containable.replace('.', '').split(',');
    containables.forEach((containable) => {
      const bagType = containable.split(' ').slice(2, 4).join(' ');
      const containingBag = bag.replace(' bags', '');
      if (rulesDictionary[bagType]) {
        rulesDictionary[bagType].push(containingBag.trim());
      } else {
        rulesDictionary[bagType] = [containingBag.trim()];
      }
    });
  });

  return rulesDictionary;
};
