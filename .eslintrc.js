module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  // 继承的规则 [扩展]
  extends: [
    // https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json
    'standard',
    // https://eslint.org/docs/rules/
    'eslint:recommended', // Uses the set of rules which are recommended for all projects by the ESLint Team
    // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended', // not all eslint core rules are compatible with TypeScript, this will adjust the one from eslint appropriately for TypeScript
    'plugin:@typescript-eslint/recommended', // enable all the recommended rules for @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // enable some highly valuable rules which simply require type-checking in order to be implemented correctly
    // https://github.com/prettier/eslint-config-prettier/blob/master/index.js
    'prettier',
    // https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint code formatting related rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // https://github.com/prettier/eslint-config-prettier/blob/master/standard.js
    'prettier/standard' // ESlint Rules for the Standard Linter
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // 解析器
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.eslint.json',
    tsconfigRootDir: './',
    extraFileExtensions: []
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'prettier/prettier': 2,
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-var-requires': 1
  }
}
