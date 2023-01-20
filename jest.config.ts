module.exports = {
  clearMocks: true,
  setupFiles: ["<rootDir>/src/setupTests.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.tsx", "!**/node_modules/**"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  coveragePathIgnorePatterns: ["<rootDir>/src/**/*.props.{ts}", "<rootDir>/src/interfaces/index.ts"]
}
