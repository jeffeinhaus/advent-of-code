import { Tile, convertToTileArray, findCornerTiles, flipHorizontal, flipVertical, rotate } from '.';
import { fileToStringArray } from '@utils/file-reader';

describe('Jurassic Jigsaw', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');
  const example = fileToStringArray(__dirname, 'input/example.txt');

  describe(findCornerTiles, () => {
    it('multiplies the ids of all the corner tiles after rearranging', () => {
      const tiles = convertToTileArray(example);
      expect(findCornerTiles(tiles)).toEqual(20899048083289);
    });

    it.skip('finds the answer to the puzzle input', () => {
      const tiles = convertToTileArray(puzzle);
      expect(findCornerTiles(tiles)).toEqual(108603771107737);
    });
  });

  describe(convertToTileArray, () => {
    let result: Tile[];
    beforeEach(() => {
      result = convertToTileArray(example);
    });

    it('returns an array of tiles with ids', () => {
      expect(result[0].id).toEqual(2311);
      expect(result[1].id).toEqual(1951);
      expect(result[2].id).toEqual(1171);
      expect(result[3].id).toEqual(1427);
      expect(result[4].id).toEqual(1489);
      expect(result[5].id).toEqual(2473);
      expect(result[6].id).toEqual(2971);
      expect(result[7].id).toEqual(2729);
      expect(result[8].id).toEqual(3079);
    });

    it('returns the tile data for each tile', () => {
      expect(result[0].tile).toEqual([
        '..##.#..#.',
        '##..#.....',
        '#...##..#.',
        '####.#...#',
        '##.##.###.',
        '##...#.###',
        '.#.#.#..##',
        '..#....#..',
        '###...#.#.',
        '..###..###',
      ]);
      expect(result[1].tile).toEqual([
        '#.##...##.',
        '#.####...#',
        '.....#..##',
        '#...######',
        '.##.#....#',
        '.###.#####',
        '###.##.##.',
        '.###....#.',
        '..#.#..#.#',
        '#...##.#..',
      ]);
      expect(result[2].tile).toEqual([
        '####...##.',
        '#..##.#..#',
        '##.#..#.#.',
        '.###.####.',
        '..###.####',
        '.##....##.',
        '.#...####.',
        '#.##.####.',
        '####..#...',
        '.....##...',
      ]);
      expect(result[3].tile).toEqual([
        '###.##.#..',
        '.#..#.##..',
        '.#.##.#..#',
        '#.#.#.##.#',
        '....#...##',
        '...##..##.',
        '...#.#####',
        '.#.####.#.',
        '..#..###.#',
        '..##.#..#.',
      ]);
      expect(result[4].tile).toEqual([
        '##.#.#....',
        '..##...#..',
        '.##..##...',
        '..#...#...',
        '#####...#.',
        '#..#.#.#.#',
        '...#.#.#..',
        '##.#...##.',
        '..##.##.##',
        '###.##.#..',
      ]);
      expect(result[5].tile).toEqual([
        '#....####.',
        '#..#.##...',
        '#.##..#...',
        '######.#.#',
        '.#...#.#.#',
        '.#########',
        '.###.#..#.',
        '########.#',
        '##...##.#.',
        '..###.#.#.',
      ]);
      expect(result[6].tile).toEqual([
        '..#.#....#',
        '#...###...',
        '#.#.###...',
        '##.##..#..',
        '.#####..##',
        '.#..####.#',
        '#..#.#..#.',
        '..####.###',
        '..#.#.###.',
        '...#.#.#.#',
      ]);
      expect(result[7].tile).toEqual([
        '...#.#.#.#',
        '####.#....',
        '..#.#.....',
        '....#..#.#',
        '.##..##.#.',
        '.#.####...',
        '####.#.#..',
        '##.####...',
        '##..#.##..',
        '#.##...##.',
      ]);
      expect(result[8].tile).toEqual([
        '#.#.#####.',
        '.#..######',
        '..#.......',
        '######....',
        '####.#..#.',
        '.#...#.##.',
        '#.#####.##',
        '..#.###...',
        '..#.......',
        '..#.###...',
      ]);
    });
  });

  describe('Match tiles', () => {
    let tiles: Tile[];
    beforeEach(() => {
      tiles = convertToTileArray(example);
    });

    describe('Match left', () => {
      it('returns true if the tile lines up to the left', () => {
        expect(tiles[0].matchesLeft(tiles[1])).toEqual(true);
      });
      it('returns false if the tile does not line up to the left', () => {
        expect(tiles[0].matchesLeft(tiles[2])).toEqual(false);
      });
    });

    describe('Match Right', () => {
      it('returns true if the tile lines up to the right', () => {
        const flippedTile = new Tile(0, flipVertical(tiles[0].tile));
        expect(flippedTile.matchesRight(tiles[8])).toEqual(true);
      });
      it('returns false if the tile does not line up to the right', () => {
        expect(tiles[0].matchesRight(tiles[8])).toEqual(false);
      });
    });

    describe('Match Top', () => {
      it('returns true if the tile lines up to the top', () => {
        const flippedTile3 = new Tile(0, flipVertical(tiles[3].tile));
        const flippedTile0 = new Tile(0, flipVertical(tiles[0].tile));
        expect(flippedTile3.matchesTop(flippedTile0)).toEqual(true);
      });
      it('returns false if the tile does not line up to the top', () => {
        expect(tiles[3].matchesTop(tiles[0])).toEqual(false);
      });
    });

    describe('Match Bottom', () => {
      it('returns true if the tile lines up to the bottom', () => {
        const flippedTile3 = new Tile(0, flipVertical(tiles[3].tile));
        const flippedTile0 = new Tile(0, flipVertical(tiles[0].tile));
        expect(flippedTile0.matchesBottom(flippedTile3)).toEqual(true);
      });
      it('returns false if the tile does not line up to the bottom', () => {
        expect(tiles[0].matchesBottom(tiles[3])).toEqual(false);
      });
    });
  });

  describe('Rotate tile', () => {
    let tiles: Tile[];
    beforeEach(() => {
      tiles = convertToTileArray(example);
    });

    it('rotates the tile 90 degrees to the right', () => {
      expect(rotate(tiles[0].tile)).toEqual([
        '.#..#####.',
        '.#.####.#.',
        '###...#..#',
        '#..#.##..#',
        '#....#.##.',
        '...##.##.#',
        '.#...#....',
        '#.#.##....',
        '##.###.#.#',
        '#..##.#...',
      ]);
    });
  });

  describe('Flip tile vertical', () => {
    let tiles: Tile[];
    beforeEach(() => {
      tiles = convertToTileArray(example);
    });

    it('flips the tile upside down', () => {
      expect(flipVertical(tiles[0].tile)).toEqual([
        '..###..###',
        '###...#.#.',
        '..#....#..',
        '.#.#.#..##',
        '##...#.###',
        '##.##.###.',
        '####.#...#',
        '#...##..#.',
        '##..#.....',
        '..##.#..#.',
      ]);
    });
  });

  describe('Flip tile horizontal', () => {
    let tiles: Tile[];
    beforeEach(() => {
      tiles = convertToTileArray(example);
    });

    it('flips the tile horizontally', () => {
      expect(flipHorizontal(tiles[0].tile)).toEqual([
        '.#..#.##..',
        '.....#..##',
        '.#..##...#',
        '#...#.####',
        '.###.##.##',
        '###.#...##',
        '##..#.#.#.',
        '..#....#..',
        '.#.#...###',
        '###..###..',
      ]);
    });
  });
});
