/* eslint-disable @typescript-eslint/no-var-requires */
const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const createConfig = (directory) => ({
  clearMocks: true,
  coverageDirectory: `coverage/${directory}`,
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
  preset: 'ts-jest',
  roots: [`<rootDir>/${directory}`],
  testEnvironment: 'node',
});

const twentyFifteen = createConfig('advent-of-code/2015/');
const twentyTwenty = createConfig('advent-of-code/2020/');
const crackingTheCodingInterview = createConfig('cracking-the-coding-interview/');

module.exports = {
  collectCoverage: true,
  projects: [twentyFifteen, twentyTwenty, crackingTheCodingInterview],
};
