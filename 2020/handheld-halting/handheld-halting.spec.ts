import { detectInfiniteLoop, fixBadInstruction } from './handheld-halting';
import { fileToStringArray } from '@utils/file-reader';

describe('Handheld Halting', () => {

  let input: string[] = [];
  beforeAll(() => {
    input = fileToStringArray(__dirname, 'puzzle_input.txt');
  });

  const testInput = [
    'nop +0',
    'acc +1',
    'jmp +4',
    'acc +3',
    'jmp -3',
    'acc -99',
    'acc +1',
    'jmp -4',
    'acc +6',
  ];

  describe(detectInfiniteLoop, () => {
    it('finds the accumulator value before the infinite loop begins', () => {
      const result = detectInfiniteLoop(testInput);
      expect(result[0]).toEqual(5);
    });
  
    it('finds the answer for the puzzle input', () => {
      const result = detectInfiniteLoop(input);
      console.log(result);
      expect(result[0]).not.toEqual(0);
    });
  });

  describe(fixBadInstruction, () => {
    it('finds the accumulator value after termination when fixing bad instruction', () => {
      const result = fixBadInstruction(testInput);
      expect(result).toEqual(8);
    });

    it('finds the answer for the puzzle input', () => {
      const result = fixBadInstruction(input);
      console.log(result);
      expect(result).not.toEqual(0);
    });
  });
});