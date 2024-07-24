const js = require('@eslint/js');
const globals = require('globals');
const tseslint = require('typescript-eslint');
const eslintReact = require('eslint-plugin-react');
const eslintReactHooks = require('eslint-plugin-react-hooks');
const eslintReactRefresh = require('eslint-plugin-react-refresh');

/** @type {import('eslint').Linter.FlatConfig[]} */

module.exports = tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react': eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
    },
  },
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage', 
      'eslint.config.js', 
      'global.d.ts',
      'setupTests.ts',
      '.husky',
      '.storybook',
      '.github',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
      }
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      "no-unused-vars": "warn",
      "no-alert": "warn",
      "no-console": "warn",
      "no-var": "error",
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": [ "error", { "max": 1} ],
      "max-len": [ "warn", { "ignoreComments": true, "code": 100 } ],
      "max-lines": [ "warn", { "max": 250 } ]
    },
  },
);