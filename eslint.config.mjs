// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules/', 'dist/', 'build/'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...prettierConfig.rules, // Integrates Prettier
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
];
