module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': ['vue-jest', 'esbuild-jest'],
    "^.+\\.t|jsx?$": "esbuild-jest"
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  moduleFileExtensions: ['vue', 'js', 'ts'],
  setupFiles: ['./jest.setup.js'],
}
