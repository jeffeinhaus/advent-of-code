import { computeSeatId, findMySeat, maxSeatId } from '.';
import { fileToStringArray } from '@utils/file-reader';

describe('Binary Boarding', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');

  it('computes the seat id by finding the row, multiplying by 8, then adding the column', () => {
    expect(computeSeatId('FBFBBFFRLR')).toEqual(357);
    expect(computeSeatId('BFFFBBFRRR')).toEqual(567);
    expect(computeSeatId('FFFBBBFRRR')).toEqual(119);
    expect(computeSeatId('BBFFBBFRLL')).toEqual(820);
  });

  it('computes the highest seat ID for the puzzle input', () => {
    expect(maxSeatId(puzzle)).toEqual(848);
  });

  it('finds my seat for the puzzle input', () => {
    expect(findMySeat(puzzle)).toEqual(682);
  });
});
