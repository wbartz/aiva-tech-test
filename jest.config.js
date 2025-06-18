import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Suporte para imports de CSS/SCSS
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Suporte para imports com @/
    '^@/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/components/ui/'],
  coveragePathIgnorePatterns: ['<rootDir>/components/ui/'],
}

export default createJestConfig(customJestConfig)
