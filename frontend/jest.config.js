module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|avif)$':require.resolve('jest-transform-stub'),
  },
  testEnvironment: "jsdom",
  preset: 'ts-jest',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$',
}
