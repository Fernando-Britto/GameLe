import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off', // Desactiva la regla para React 17+
    },
    settings: {
      react: {
        version: 'detect', // Detecta la versión de React automáticamente
      },
    },
  },
];