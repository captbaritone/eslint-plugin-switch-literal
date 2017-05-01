# eslint-plugin-switch-literal

[![Greenkeeper badge](https://badges.greenkeeper.io/captbaritone/eslint-plugin-switch-literal.svg)](https://greenkeeper.io/)

Disallow the ussage of string literals in switch cases.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-switch-literal`:

```
$ npm install eslint-plugin-switch-literal --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-switch-literal` globally.

## Usage

Add `switch-literal` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "switch-literal"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "switch-literal/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





