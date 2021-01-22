import { findAdjacentOccupiedSeatsStrict, findOccupiedSeatsAtEquilibrium } from '.';
import { fileTo2DArray } from '@utils/file-reader';

describe('Seating System', () => {
  const puzzle = fileTo2DArray(__dirname, 'input/puzzle.txt');
  const example = fileTo2DArray(__dirname, 'input/example.txt');

  describe(findOccupiedSeatsAtEquilibrium, () => {
    it('finds the number of occupied seats with loose adjacent rules', () => {
      expect(findOccupiedSeatsAtEquilibrium(example, false, 4)).toEqual(37);
    });

    it('finds the number of occupied seats with strict adjacent rules', () => {
      expect(findOccupiedSeatsAtEquilibrium(example, true, 5)).toEqual(26);
    });

    it('finds the answer for the part 1 puzzle input', () => {
      expect(findOccupiedSeatsAtEquilibrium(puzzle, false, 4)).toEqual(2438);
    });

    it('finds the answer for the part 2 puzzle input', () => {
      expect(findOccupiedSeatsAtEquilibrium(puzzle, true, 5)).toEqual(2174);
    });
  });

  describe(findAdjacentOccupiedSeatsStrict, () => {
    const allEight = fileTo2DArray(__dirname, 'input/all_eight.txt');
    const blockedSeat = fileTo2DArray(__dirname, 'input/blocked_seat.txt');
    const noOccupiedSeats = fileTo2DArray(__dirname, 'input/no_occupied.txt');

    it('finds the number of occupied seats it can see', () => {
      expect(findAdjacentOccupiedSeatsStrict(allEight, 4, 3)).toEqual(8);
      expect(findAdjacentOccupiedSeatsStrict(blockedSeat, 1, 1)).toEqual(0);
      expect(findAdjacentOccupiedSeatsStrict(noOccupiedSeats, 3, 3)).toEqual(0);
    });
  });
});
