# Setup React.js with Eslint, Prettier and airbnb

First of all we need to install eslint and configs as dev dependencies. You can use your own config, but I will use config from airbnb:

`yarn add -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

After this we need to create eslint config file:

 - .eslintrc.js

 `module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'react-app'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  }
};`

 add scripts to "package.json" file:
`"scripts": {
  ...
  "lint:eslint": "eslint . --ext .ts,.js,.tsx,.jsx",
  "lint:eslint:fix": "eslint . --ext .ts,.js,.tsx,.jsx --fix"
}`

Now install Prettier.  For this we need to add few packages:
`yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`

Create the prettier config file:
`{
  "singleQuote": true,
  "trailingComma": "all",
  "jsxBracketSameLine": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true
}`

And modify eslint config:

`const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb-typescript', 'react-app', 'prettier', 'prettier/react'],
  // extends: ['airbnb-typescript', 'react-app', 'prettier', 'prettier/react'], // if you're using typescript
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
};`

add prettier script on package.json:

`"scripts": {
  ...
  "prettify": "prettier --write **/*.{ts,tsx,js,jsx,json}"
}`
