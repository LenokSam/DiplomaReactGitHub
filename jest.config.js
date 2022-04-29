module.exports = {
  rootDir: 'src',
  automock: false,
  resetMocks: false,
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  coverageDirectory: '../coverage',
  collectCoverage: true,
  setupFiles: ['./setupJest.js'],
};
