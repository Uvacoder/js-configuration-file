Configuration file for ESlint, Prettier and Husky.
It can work mainly with React.js, but with few modification on eslintrc.js, it can work with ES6.

Package Needed:

Eslint:
```
yarn add -D eslint
```

Then run:
```
yarn run eslint --init
```

Eslint + React:
```
yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y
```

Prettier:
```
yarn add -D prettier
```

Prettier + Eslint:
```
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

Husky + Lint-Staged:
```
yarn add -D husky lint-staged
```

* [How to use Husky with Hooks:](https://typicode.github.io/husky/#/?id=create-a-hook) 

Add this inside `package.json`:
``` 
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint:eslint": "eslint . --ext .ts,.js,.tsx,.jsx",
    "lint:eslint:fix": "eslint . --ext .ts,.js,.tsx,.jsx --fix",
    "prettify": "prettier --write **/*.{ts,tsx,js,jsx,json}",
    "lint-staged": "lint-staged"
  },
  "husky": {
    "hooks": {
      "pre-commit-lint": "lint-staged",
      "applypatch-msg": "echo \"[Husky] applypatch-msg\"",
        "pre-applypatch": "echo \"[Husky] pre-applypatch\"",
        "post-applypatch": "echo \"[Husky] post-applypatch\"",
        "pre-commit": "echo \"[Husky] pre-commit\"",
        "pre-merge-commit": "echo \"[Husky] pre-merge-commit\"",
        "prepare-commit-msg": "echo \"[Husky] prepare-commit-msg\"",
        "commit-msg": "echo \"[Husky] commit-msg\"",
        "post-commit": "echo \"[Husky] post-commit\"",
        "pre-rebase": "echo \"[Husky] pre-rebase\"",
        "post-checkout": "echo \"[Husky] post-checkout\"",
        "post-merge": "echo \"[Husky] post-merge\"",
        "pre-push": "echo \"[Husky] pre-push\"",
        "pre-receive": "echo \"[Husky] pre-receive\"",
        "update": "echo \"[Husky] update\"",
        "post-receive": "echo \"[Husky] post-receive\"",
        "post-update": "echo \"[Husky] post-update\"",
        "reference-transaction": "echo \"[Husky] reference-transaction\"",
        "push-to-checkout": "echo \"[Husky] push-to-checkout\"",
        "pre-auto-gc": "echo \"[Husky] pre-auto-gc\"",
        "post-rewrite": "echo \"[Husky] post-rewrite\"",
        "sendemail-validate": "echo \"[Husky] sendemail-validate\"",
        "fsmonitor-watchman": "echo \"[Husky] fsmonitor-watchman\"",
        "p4-changelist": "echo \"[Husky] p4-changelist\"",
        "p4-prepare-changelist": "echo \"[Husky] p4-prepare-changelist\"",
        "p4-post-changelist": "echo \"[Husky] p4-post-changelist\"",
        "p4-pre-submit": "echo \"[Husky] p4-pre-submit\"",
        "post-index-change": "echo \"[Husky] post-index-change\""
    }
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "yarn lint:eslint:fix && yarn prettify",
      "git add --force"
    ],
    "*.{ts,tsx,js,jsx,json}": [
      "yarn lint:eslint:fix && yarn prettify",
      "git add --force"
    ]
  },
  ```
