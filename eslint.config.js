import prettier from 'eslint-config-prettier';
import solidjseslint from 'eslint-plugin-solid';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      solid: solidjseslint.configs.typescript,
    },
  },
  tseslint.configs.recommended,
  prettier,
  globalIgnores(['./node_modules/**', '.DS_Store', './dist/**']),
]);
