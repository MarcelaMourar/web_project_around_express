module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-console': ['warn', { allow: ['log', 'warn', 'error'] }],
    'linebreak-style': 'off',
  },
};
