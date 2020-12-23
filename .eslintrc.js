module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['node_modules', 'dist'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': 'error',
    'brace-style': 'error',
    camelcase: 'error',
    'computed-property-spacing': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],
    'eol-last': 'error',
    eqeqeq: 'error',
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1,
      },
    ],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
      },
    ],
    'lines-between-class-members': 'error',
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'multiline-comment-style': 'error',
    'multiline-ternary': ['error', 'always-multiline'],
    'no-lonely-if': 'error',
    'no-mixed-operators': 'off',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'no-nested-ternary': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': 'error',
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', 'never'],
    'padded-blocks': ['error', 'never'],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: 'error',
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'generator-star-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'sort-imports': 'error',
    'symbol-description': 'warn',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',
  },
};
