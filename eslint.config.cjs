// eslint.config.cjs
const eslintJs = require('@eslint/js');
const parser = require('@typescript-eslint/parser');
const plugin = require('@typescript-eslint/eslint-plugin');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const eslintConfigPrettier = require('eslint-config-prettier');
const globals = require('globals');

// 手动构造 @typescript-eslint/recommended 的等效配置
const tsRecommended = {
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser,
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module'
    }
  },
  plugins: {
    '@typescript-eslint': plugin
  },
  rules: {
    // 来自 @typescript-eslint/eslint-plugin 的 recommended 规则
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-empty-function': 'warn',
    // 可根据需要扩展更多...
  }
};

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**', '**/*.d.ts']
  },

  // 基础 JS 规则
  eslintJs.configs.recommended,

  // TypeScript 规则（手动定义）
  tsRecommended,

  // React 规则
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn'
    }
  },

  // Prettier 兼容（最后）
  eslintConfigPrettier
];