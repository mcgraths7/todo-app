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
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "prefer-object-spread": 0,
    "no-shadow": 0,
    "react/prop-types": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
  },
};
