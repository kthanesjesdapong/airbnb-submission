const fs = require('fs');
const { readFileSync } = fs;
const config = JSON.parse(readFileSync(`${__dirname}/.swcrc`, 'utf-8'));

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/**/*.test.ts"],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  clearMocks: true,
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', config],
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx']
};