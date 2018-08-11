module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jasmine': true,
        'jest': true,
    },
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 8,
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true,
        },
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'react/jsx-uses-vars': [2],
        'no-console': 0,
        'semi': [
            'warn',
            'never',
        ],
        'import/prefer-default-export': 'off',
        'import/no-named-as-default': 'off',
        'comma-dangle': 'warn',
        'function-paren-newline': 'off',
        'react/jsx-wrap-multilines': 'off',
    }
};
