module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./src/__mocks__/firebase.utils.mocks'],
  automock: false,
  collectCoverage: true,
  roots: [
    "<rootDir>/src",
    "<rootDir>/tests"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
};
