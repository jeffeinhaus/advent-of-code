import { 
  findOccupiedSeatsAtEquilibrium,
  findAdjacentOccupiedSeatsStrict,
} from './seating-system';
import { fileTo2DArray } from '@utils/file-reader';

describe('Seating System', () => {

  let input: string[][] = [];
  beforeAll(() => {
    input = fileTo2DArray(__dirname, 'puzzle_input.txt');
  });

  const testInput = [
    ['L','.','L','L','.','L','L','.','L','L'],
    ['L','L','L','L','L','L','L','.','L','L'],
    ['L','.','L','.','L','.','.','L','.','.'],
    ['L','L','L','L','.','L','L','.','L','L'],
    ['L','.','L','L','.','L','L','.','L','L'],
    ['L','.','L','L','L','L','L','.','L','L'],
    ['.','.','L','.','L','.','.','.','.','.'],
    ['L','L','L','L','L','L','L','L','L','L'],
    ['L','.','L','L','L','L','L','L','.','L'],
    ['L','.','L','L','L','L','L','.','L','L'],
  ];

  describe(findOccupiedSeatsAtEquilibrium, () => {
    it('finds the number of occupied seats with loose adjacent rules', () => {
      const result = findOccupiedSeatsAtEquilibrium(testInput, false, 4);
      expect(result).toEqual(37);
    });

    it('finds the number of occupied seats with strict adjacent rules', () => {
      const result = findOccupiedSeatsAtEquilibrium(testInput, true, 5);
      expect(result).toEqual(26);
    });
  
    it('finds the answer for the part 1 puzzle input', () => {
      const result = findOccupiedSeatsAtEquilibrium(input, false, 4);
      console.log(result);
      expect(result).not.toEqual(0);
    });

    it('finds the answer for the part 2 puzzle input', () => {
      const result = findOccupiedSeatsAtEquilibrium(input, true, 5);
      console.log(result);
      expect(result).not.toEqual(0);
    })
  });

  describe(findAdjacentOccupiedSeatsStrict, () => {
    const allEight = [
      ['.','.','.','.','.','.','.','#','.'],
      ['.','.','.','#','.','.','.','.','.'],
      ['.','#','.','.','.','.','.','.','.'],
      ['.','.','.','.','.','.','.','.','.'],
      ['.','.','#','L','.','.','.','.','#'],
      ['.','.','.','.','#','.','.','.','.'],
      ['.','.','.','.','.','.','.','.','.'],
      ['#','.','.','.','.','.','.','.','.'],
      ['.','.','.','#','.','.','.','.','.'],
    ];

    const blockedSeat = [
      ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
      ['.','L','.','L','.','#','.','#','.','#','.','#','.'],
      ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
    ];

    const noOccupiedSeats = [
      ['.','#','#','.','#','#','.'],
      ['#','.','#','.','#','.','#'],
      ['#','#','.','.','.','#','#'],
      ['.','.','.','L','.','.','.'],
      ['#','#','.','.','.','#','#'],
      ['#','.','#','.','#','.','#'],
      ['.','#','#','.','#','#','.'],
    ];
    
    it('finds the number of occupied seats it can see', () => {
      expect(findAdjacentOccupiedSeatsStrict(allEight, 4, 3)).toEqual(8);
      expect(findAdjacentOccupiedSeatsStrict(blockedSeat, 1, 1)).toEqual(0);
      expect(findAdjacentOccupiedSeatsStrict(noOccupiedSeats, 3, 3)).toEqual(0);
    });
  });

})