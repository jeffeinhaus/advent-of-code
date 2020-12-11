import { readFileSync } from 'fs';
import { resolve } from 'path';

export const fileToNumArray = (directory: string, fileName: string): number[] => {
  return readFileLineByLine(directory, fileName)
    .map((line) => Number(line));
}

export const fileToStringArray = (directory: string, fileName: string): string[] => {
  return readFileLineByLine(directory, fileName);
}

export const fileTo2DArray = (directory: string, fileName: string): string[][] => {
  const lines = readFileLineByLine(directory, fileName);
  const lines2D: string[][] = [];
  lines.forEach((line, index) => {
    lines2D.push([]);
    [...line].forEach((character) => {
      lines2D[index].push(character);
    });
  });

  return lines2D;
};

const readFileLineByLine = (directory: string, fileName: string): string[] => {
  return readFileSync(resolve(directory, fileName), 'utf-8')
    .split('\n');
}