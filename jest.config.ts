const config = {
  verbose: true,
  setupFiles: ["<rootDir>/src/setupTests.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.tsx", "!**/node_modules/**"]
}

module.exports = config
