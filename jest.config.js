module.exports = {
  preset: 'react-native',
  rootDir: './src',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|ts?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    '<rootDir>/__tests__/test-env.js',
  ],
  coverageReporters: ["json-summary", "lcov", "text"],
  coverageDirectory: "<rootDir>/../coverage",
  collectCoverageFrom: [
    "<rootDir>/**/*.{ts,tsx,js,jsx}",
    "!<rootDir>/**/*.story.{ts,tsx,js,jsx}",
    "!<rootDir>/xml/"
  ]
};
