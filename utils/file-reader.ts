import { readFileSync } from 'fs';
import { resolve } from 'path';

export const fileToNumArray = (directory: string, fileName: string): number[] => {
  return readFileSync(resolve(directory, fileName), 'utf-8')
      .split('\n')
      .map((line) => Number(line));
}