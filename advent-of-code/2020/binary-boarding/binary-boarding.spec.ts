import { computeSeatId, findMySeat, maxSeatId } from './binary-boarding';
import { fileToStringArray } from '@utils/file-reader';

describe('Binary Boarding', () => {
  let input: string[] = [];
  beforeAll(() => {
    input = fileToStringArray(__dirname, 'puzzle_input.txt');
  });

  it('computes the seat id by finding the row, multiplying by 8, then adding the column', () => {
    expect(computeSeatId('FBFBBFFRLR')).toEqual(357);
    expect(computeSeatId('BFFFBBFRRR')).toEqual(567);
    expect(computeSeatId('FFFBBBFRRR')).toEqual(119);
    expect(computeSeatId('BBFFBBFRLL')).toEqual(820);
  });

  it('computes the highest seat ID for the puzzle input', () => {
    const result = maxSeatId(input);
    console.log(result);
    expect(result).not.toEqual(0);
  });

  it('finds my seat for the puzzle input', () => {
    const result = findMySeat(input);
    console.log(result);
    expect(result).not.toEqual(0);
  });
});
