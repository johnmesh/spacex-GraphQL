/* eslint-disable @typescript-eslint/no-var-requires */

// require('@testing-library/jest-dom/extend-expect')
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  clearMocks: true,
  restoreMocks: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: '.coverage',
  moduleNameMapper: {
    '^/components/(.*)$': '<rootDir>/src/components/$1',
  },
  coverageThreshold: {
    global: {
      lines: 100,
      statements: 100,
      functions: 100,
      branches: 100,
    },
  },
  collectCoverageFrom: ['**/*.ts', '**/*.tsx'],
  coveragePathIgnorePatterns: [
    'pages/', // should test this with e2e tests
    'mock-data/',
    'types.ts',
    'jest.config.js',
    'next-env.d.ts',
    '_app.page.tsx',
    '_document.page.tsx',
    'test-utils',
    'types',
  ],
}

module.exports = createJestConfig(customJestConfig)
