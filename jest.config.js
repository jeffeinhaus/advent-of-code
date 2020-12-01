/* eslint-disable @typescript-eslint/no-var-requires */
const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const createConfig = (
  directory,
) => ({
  clearMocks: true,
  coverageDirectory: `coverage/${directory}`,
  moduleNameMapper: {
    ...pathsToModuleNameMapper(
      compilerOptions.paths,
      { prefix: '<rootDir>/' },
    ),
  },
  preset: 'ts-jest',
  roots: [ `<rootDir>/${directory}` ],
  testEnvironment: 'node',
});

const twentyTwenty = createConfig('2020/');

module.exports = {
  collectCoverage: true,
  projects: [ twentyTwenty ],
};
