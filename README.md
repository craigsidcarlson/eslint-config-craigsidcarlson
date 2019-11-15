# ESLint Config
Customized ESLint based on [Airbnb's](https://github.com/airbnb/javascript).

## Usage
### Install Package and Peer Dependencies
`npm i -D eslint eslint-plugin-import craigsidcarlson/eslint-config-craigsidcarlson`

### Create .eslintrc File
In the root directoy of your project create a file called `.eslintrc` and put
the following:
```json
{
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "craigsidcarlson",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {}
}
```

### VSCode - Nested Project
If you're using VSCode and your project is nested in the directory you have open
add the following to your workspace settings:
```json
"eslint.workingDirectories": [
  { "directory": "./path/to/project", "changeProcessCWD": true }
]
```
