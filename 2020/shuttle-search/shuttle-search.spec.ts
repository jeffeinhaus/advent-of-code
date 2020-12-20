import { findBus, findMagicBus } from './shuttle-search';
import { fileToStringArray } from '@utils/file-reader';

describe('Shuttle Search', () => {

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
  
    it('finds the answer for the part 1 puzzle input', () => {
      const result = findBus(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });

  describe(findMagicBus, () => {
    it('finds the earliest time the magic bus could depart', () => {
      expect(findMagicBus('7,13,x,x,59,x,31,19')).toEqual(1068781);
      expect(findMagicBus('17,x,13,19')).toEqual(3417);
      expect(findMagicBus('67,7,59,61')).toEqual(754018);
      expect(findMagicBus('67,x,7,59,61')).toEqual(779210);
      expect(findMagicBus('67,7,x,59,61')).toEqual(1261476);
      expect(findMagicBus('1789,37,47,1889')).toEqual(1202161486);
    });

    // it('finds the answer to the puzzle input', () => {
    //   const result = findMagicBus(input[1]);
    //   console.log(result);
    //   expect(result).not.toEqual(0);
    // });
  })
})