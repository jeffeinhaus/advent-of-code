import { sumFloatingMemoryValues, sumMemoryValues } from './docking-data'
import { fileToStringArray } from '@utils/file-reader';

describe('Docking Data', () => {
  
  let input: string[] = [];
  beforeAll(() => {
    input = fileToStringArray(__dirname, 'puzzle_input.txt');
  });

  
  describe(sumMemoryValues, () => {
    
    it('finds the sum of the non-zero values left in memory after applying the mask', () => {
      const testInput = [
        'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
        'mem[8] = 11',
        'mem[7] = 101',
        'mem[8] = 0',
      ];
      expect(sumMemoryValues(testInput)).toEqual(165);
    });
  
    it('finds the answer for the puzzle input', () => {
      const result = sumMemoryValues(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });

  describe(sumFloatingMemoryValues, () => {
    it('finds the sum of all possible non-zero values left in memory after applying floating mask', () => {
      const testInput = [
        'mask = 000000000000000000000000000000X1001X',
        'mem[42] = 100',
        'mask = 00000000000000000000000000000000X0XX',
        'mem[26] = 1',
      ]
      expect(sumFloatingMemoryValues(testInput)).toEqual(208);
    });

    it('finds the answer for the puzzle input', () => {
      const result = sumFloatingMemoryValues(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  })

});