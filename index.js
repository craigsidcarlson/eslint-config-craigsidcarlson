
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
  },
};
