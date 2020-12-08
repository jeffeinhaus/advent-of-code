import { findBagsThatCanContainShinyGold, findBagsContainedByShinyGold } from './handy-haversacks';
import { fileToStringArray } from '@utils/file-reader';

describe('Handy Haversacks', () => {

  let input: string[] = [];
  beforeAll(() => {
    input = fileToStringArray(__dirname, 'puzzle_input.txt');
  });

  const testInput = [
    'light red bags contain 1 bright white bag, 2 muted yellow bags.',
    'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
    'bright white bags contain 1 shiny gold bag.',
    'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
    'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
    'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
    'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
    'faded blue bags contain no other bags.',
    'dotted black bags contain no other bags.',
  ];

  const testInput2 = [
    'shiny gold bags contain 2 dark red bags.',
    'dark red bags contain 2 dark orange bags.',
    'dark orange bags contain 2 dark yellow bags.',
    'dark yellow bags contain 2 dark green bags.',
    'dark green bags contain 2 dark blue bags.',
    'dark blue bags contain 2 dark violet bags.',
    'dark violet bags contain no other bags.',
  ]

  describe(findBagsThatCanContainShinyGold, () => {
    it('finds the number of bags that can contain a shiny gold bag', () => {
      const result = findBagsThatCanContainShinyGold(testInput);
      expect(result).toEqual(4);
    });
  
    it('finds the answer for the puzzle input', () => {
      const result = findBagsThatCanContainShinyGold(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });

  describe(findBagsContainedByShinyGold, () => {
    it('finds the number of bags contained inside a shiny gold bag', () => {
      expect(findBagsContainedByShinyGold(testInput)).toEqual(32);
      expect(findBagsContainedByShinyGold(testInput2)).toEqual(126);
    });
  
    it('finds the answer for the puzzle input', () => {
      const result = findBagsContainedByShinyGold(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });

});