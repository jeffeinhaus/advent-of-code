type Bag = {
  name: string,
  total: number,
};

export const findBagsThatCanContainShinyGold = (rules: string[]): number => {
  const rulesDictionary = createCanBeContainedByRulesDictionary(rules);
  
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

export const findBagsContainedByShinyGold = (rules: string[]): number => {
  const rulesDictionary = createContainsRulesDictionary(rules);
  let bagQueue = getBagsFromRule(rulesDictionary['shiny gold']);
  let count = bagQueue.length;
  while (bagQueue.length > 0) {
    const bag = bagQueue.shift();
    const bagsToAdd = getBagsFromRule(rulesDictionary[bag!])
    bagQueue = bagQueue.concat(bagsToAdd);
    count += bagsToAdd.length;
  }

  return count;
}

const getBagsFromRule = (bags: Bag[]): string[] => {
  let bagQueue: string[] = [];
  bags.forEach((bag) => {
    bagQueue = bagQueue.concat(Array(bag.total).fill(bag.name));
  });
  return bagQueue;
}

const createCanBeContainedByRulesDictionary = (rules: string[]): Record<string, string[]> => {
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

const createContainsRulesDictionary = (rules: string[]): Record<string, Bag[]> => {
  const rulesDictionary: Record<string, Bag[]> = {};
  rules.forEach((rule) => {
    const [bag, containable] = rule.split('contain');
    const containables = containable.replace('.', '').split(',');
    containables.forEach((containable) => {
      const name = containable.split(' ').slice(2, 4).join(' ');
      const total = isNaN(Number(containable.split(' ')[1])) ? 0 : Number(containable.split(' ')[1]);
      const containingBag = bag.replace(' bags', '').trim();
      const insideBag: Bag = {
        name,
        total,
      };
      if (rulesDictionary[containingBag]) {
        rulesDictionary[containingBag].push(insideBag);
      } else {
        rulesDictionary[containingBag] = [insideBag];
      }
    });
  });

  return rulesDictionary;
}