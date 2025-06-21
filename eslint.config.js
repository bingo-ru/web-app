import prettier from 'eslint-config-prettier';
import solidjseslint from 'eslint-plugin-solid';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  tseslint.configs.recommended,
  solidjseslint.configs.typescript,
  prettier,
]);
