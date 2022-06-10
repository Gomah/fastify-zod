/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: `ts-jest`,
  testEnvironment: `node`,
  testMatch: [`**/*.test.ts`],
  maxConcurrency: 30,
  testTimeout: 240000,
};
