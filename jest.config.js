module.exports = {
  setupFiles: ['./test/jest.setup.js'],
  clearMocks: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./src/__mocks__/firebase.utils.mocks'],
  automock: false,
  collectCoverage: true,
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)"
  ]
};
