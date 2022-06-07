module.exports = {
    root: true,
    extends: ['eslint:recommended', 'prettier'],
    env: {
      es2021: true,
      node: true
    },
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 13
    },
    rules: {
      indent: 'off',
      'linebreak-style': ['error', 'unix'],
      quotes: [
        'error',
        'double',
        { avoidEscape: true, allowTemplateLiterals: true }
      ],
      semi: ['error', 'never'],
      'no-console': 'error',
      'no-implicit-globals': 'error',
      'no-warning-comments': ['warn', { terms: ['fixme', 'todo'] }],
      'newline-before-return': 'error',
      curly: 'error',
      'padded-blocks': ['error', 'never'],
      'space-before-blocks': 'error',
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'break',
            'case',
            'cjs-export',
            'class',
            'continue',
            'do',
            'if',
            'switch',
            'try',
            'while',
            'return'
          ]
        },
        {
          blankLine: 'always',
          prev: [
            'break',
            'case',
            'cjs-export',
            'class',
            'continue',
            'do',
            'if',
            'switch',
            'try',
            'while',
            'return'
          ],
          next: '*'
        }
      ]
    }
  }