import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
    {
        ignores: [
            'package-lock.json',
            'playwright-report/**',
            'test-results/**',
        ],
    },
    { files: ['**/*.ts'], plugins: { js }, extends: ['js/recommended'] },
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        languageOptions: { globals: globals.node },
    },
    tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'error',
        },
    },
    eslintPluginPrettierRecommended,
]);
