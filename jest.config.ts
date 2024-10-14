import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/utils/testUtils.tsx'],
  collectCoverageFrom: [
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/styles/**'
  ],
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
}

export default createJestConfig(config)
