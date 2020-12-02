import { readFileSync } from 'fs';
import { resolve } from 'path';

export const fileToNumArray = (directory: string, fileName: string): number[] => {
  return readFileLineByLine(directory, fileName)
    .map((line) => Number(line));
}

export const fileToStringArray = (directory: string, fileName: string): string[] => {
  return readFileLineByLine(directory, fileName);
}

const readFileLineByLine = (directory: string, fileName: string): string[] => {
  return readFileSync(resolve(directory, fileName), 'utf-8')
    .split('\n');
}