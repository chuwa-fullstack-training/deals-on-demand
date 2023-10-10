export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts']
};
