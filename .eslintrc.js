// .eslintrc.js

module.exports = {
	env: {
		browser: true,
		es2022: true
	},
	extends: ['next', 'next/core-web-vitals', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
	globals: {
		React: 'readonly'
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@next/next/no-img-element': 'off',
		'linebreak-style': ['warn', 'unix'],
		quotes: ['warn', 'single', { avoidEscape: true }],
		semi: ['warn', 'always'],
		'react/no-unescaped-entities': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'eslint-plugin-import/no-duplicates': 'off',
		'import/no-duplicates': 'off',
		'no-unreachable': 'off'
	},
	overrides: [
		{
			files: ['*.js', '*.jsx'], // Target .js and .jsx files
			rules: {
				'react/prop-types': 'off' // Disable react/prop-types only for .js and .jsx files
			}
		}
	]
};
