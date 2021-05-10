const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
 );

module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "airbnb", "prettier", "plugin:node/recommended"],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": ["prettier"],
    "rules": {
        'prettier/prettier': ['error', prettierOptions],
        "no-unusued-vars":"warn",
        "no-console":"off",
        "func-names":"off",
        "no-process-exit": "warn",
        "object-shorthand": "off",
        "class-methods-use-this":"off"
    }
}
