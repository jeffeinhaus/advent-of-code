export const convertToTileArray = (tileInformation: string[]): Tile[] => {
  const tiles: Tile[] = [];
  let id = 0;
  let tile: string[] = [];
  tileInformation.forEach((info) => {
    if (info.startsWith('Tile')) {
      id = Number(info.match(/\d+/)![0]);
    } else if (info) {
      tile.push(info);
    } else {
      tiles.push(new Tile(id, tile));
      tile = [];
    }
  });

  return tiles;
};

export const findCornerTiles = (tiles: Tile[]): number => {
  for (let i = 0; i < tiles.length; i++) {
    for (let j = i + 1; j < tiles.length; j++) {
      const possibleIConfigurations = [
        tiles[i].tile,
        rotate(tiles[i].tile),
        rotate(rotate(tiles[i].tile)),
        rotate(rotate(rotate(tiles[i].tile))),
        flipVertical(tiles[i].tile),
        rotate(flipVertical(tiles[i].tile)),
        rotate(rotate(flipVertical(tiles[i].tile))),
        rotate(rotate(rotate(flipVertical(tiles[i].tile)))),
        flipHorizontal(tiles[i].tile),
        rotate(flipHorizontal(tiles[i].tile)),
        rotate(rotate(flipHorizontal(tiles[i].tile))),
        rotate(rotate(rotate(flipHorizontal(tiles[i].tile)))),
      ];
      const possibleJConfigurations = [
        tiles[j].tile,
        rotate(tiles[j].tile),
        rotate(rotate(tiles[j].tile)),
        rotate(rotate(rotate(tiles[j].tile))),
        flipVertical(tiles[j].tile),
        rotate(flipVertical(tiles[j].tile)),
        rotate(rotate(flipVertical(tiles[j].tile))),
        rotate(rotate(rotate(flipVertical(tiles[j].tile)))),
        flipHorizontal(tiles[j].tile),
        rotate(flipHorizontal(tiles[j].tile)),
        rotate(rotate(flipHorizontal(tiles[j].tile))),
        rotate(rotate(rotate(flipHorizontal(tiles[j].tile)))),
      ];

      possibleIConfigurations.forEach((iConfig) => {
        possibleJConfigurations.forEach((jConfig) => {
          const iTile = new Tile(tiles[i].id, iConfig);
          const jTile = new Tile(tiles[j].id, jConfig);
          if (iTile.matchesLeft(jTile)) {
            tiles[i].tileMap.left.add(tiles[j].id);
            tiles[j].tileMap.right.add(tiles[i].id);
          } else if (iTile.matchesRight(jTile)) {
            tiles[i].tileMap.right.add(tiles[j].id);
            tiles[j].tileMap.left.add(tiles[i].id);
          } else if (iTile.matchesTop(jTile)) {
            tiles[i].tileMap.top.add(tiles[j].id);
            tiles[j].tileMap.bottom.add(tiles[i].id);
          } else if (iTile.matchesBottom(jTile)) {
            tiles[i].tileMap.bottom.add(tiles[j].id);
            tiles[j].tileMap.top.add(tiles[i].id);
          }
        });
      });
    }
  }

  const corners: number[] = [];
  tiles.forEach((tile) => {
    if (isCorner(tile)) {
      corners.push(tile.id);
    }
  });

  return corners.reduce((a, b) => a * b);
};

const isCorner = (tile: Tile): boolean => {
  const uniqueTiles = new Set([
    ...tile.tileMap.left,
    ...tile.tileMap.right,
    ...tile.tileMap.bottom,
    ...tile.tileMap.top,
  ]);
  return uniqueTiles.size <= 2;
};

export const rotate = (tile: string[]): string[] => {
  const rotatedTile: string[] = [];
  for (let i = 0; i < tile[0].length; i++) {
    let tileRow = '';
    for (let j = tile.length - 1; j >= 0; j--) {
      tileRow += tile[j].charAt(i);
    }
    rotatedTile.push(tileRow);
  }
  return rotatedTile;
};

export const flipVertical = (tile: string[]): string[] => {
  const flippedTile: string[] = [];
  for (let i = tile.length - 1; i >= 0; i--) {
    flippedTile.push(tile[i]);
  }

  return flippedTile;
};

export const flipHorizontal = (tile: string[]): string[] => {
  const flippedTile: string[] = [];
  for (let i = 0; i < tile.length; i++) {
    flippedTile.push(tile[i].split('').reverse().join(''));
  }

  return flippedTile;
};

export class Tile {
  id: number;

  tile: string[];

  tileMap: {
    left: Set<number>;
    right: Set<number>;
    top: Set<number>;
    bottom: Set<number>;
  };

  constructor(id: number, tile: string[]) {
    this.id = id;
    this.tile = tile;
    this.tileMap = {
      left: new Set(),
      right: new Set(),
      top: new Set(),
      bottom: new Set(),
    };
  }

  matchesLeft = (toCheck: Tile): boolean => {
    const currentTile = this.tile;
    const toCheckTile = toCheck.tile;
    for (let i = 0; i < currentTile.length; i++) {
      if (currentTile[i].charAt(0) !== toCheckTile[i].charAt(toCheckTile[i].length - 1)) {
        return false;
      }
    }
    return true;
  };

  matchesRight = (toCheck: Tile): boolean => {
    const currentTile = this.tile;
    const toCheckTile = toCheck.tile;
    for (let i = 0; i < currentTile.length; i++) {
      if (currentTile[i].charAt(currentTile[i].length - 1) !== toCheckTile[i].charAt(0)) {
        return false;
      }
    }
    return true;
  };

  matchesTop = (toCheck: Tile): boolean => {
    const currentTile = this.tile;
    const toCheckTile = toCheck.tile;
    for (let i = 0; i < currentTile[0].length; i++) {
      if (currentTile[0].charAt(i) !== toCheckTile[toCheckTile.length - 1].charAt(i)) {
        return false;
      }
    }
    return true;
  };

  matchesBottom = (toCheck: Tile): boolean => {
    const currentTile = this.tile;
    const toCheckTile = toCheck.tile;
    for (let i = 0; i < currentTile[currentTile.length - 1].length; i++) {
      if (currentTile[currentTile.length - 1].charAt(i) !== toCheckTile[0].charAt(i)) {
        return false;
      }
    }
    return true;
  };
}
