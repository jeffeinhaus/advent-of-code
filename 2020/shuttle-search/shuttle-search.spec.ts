import { findBus } from './shuttle-search';
import { fileToStringArray } from '@utils/file-reader';

describe('Tobbogan Trajectory', () => {

  let input: string[] = [];
  beforeAll(() => {
    input = fileToStringArray(__dirname, 'puzzle_input.txt');
  });

  const testInput = [
    '939',
    '7,13,x,x,59,x,31,19',
  ];

  describe(findBus, () => {
    it('finds the bus id of the earliest bus multiplied by the number of minutes you have to wait', () => {
      const result = findBus(testInput);
      expect(result).toEqual(295);
    });
  
    it.only('finds the answer for the part 1 puzzle input', () => {
      const result = findBus(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });
})