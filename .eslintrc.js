module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 10,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-shadow": 0,
    "react/prop-types": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
  },
};
