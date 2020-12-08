import { handyHaversacks } from './handy-haversacks';
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

  describe(handyHaversacks, () => {
    it('finds the number of bags that can contain a shiny gold bag', () => {
      const result = handyHaversacks(testInput);
      expect(result).toEqual(4);
    });
  
    it.only('finds the answer for the puzzle input', () => {
      const result = handyHaversacks(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });

});