// 相关配置请访问：https://prettier.io/docs/en/configuration.html https://prettier.io/docs/en/options.html
// Standard Rules: https://github.com/standard/standard/blob/master/RULES.md
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  rangeStart: 0,
  rangeEnd: Infinity,
  // parser: 'None', // the default value was "babylon" until v1.13.0.
  filepath: 'None',
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'auto',
  overrides: [
    {
      files: '**.json',
      options: {
        parser: 'json'
      }
    }
  ]
}
