module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-var-requires': 0,
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': ['error', 'windows'],
    'max-len': ['error', {
      code: 120, ignoreUrls: true, ignoreStrings: true, ignoreComments: true,
    }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // группа для импортов из стандартных библиотек
          ['^react$', '^react-dom$', '^prop-types$'],
          // группа для импортов из файлов проекта
          ['^\\.'],
          // группа для импортов из модулей node_modules
          ['^@?\\w'],
          // группы для импортов из alias'ов
          ['^@components'],
          ['^@common'],
          ['^@pages'],
        ],
      },
    ],

  },
}
