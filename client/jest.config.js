const fs = require('fs');
const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  testEnvironment: 'jsdom',
  roots: ['./src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  ...{
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest-config/file-mock.js',
    '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', config],
  },
  modulePathIgnorePatterns: ['./src/entities/rating/lib/ratingMap.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};
