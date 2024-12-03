import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
	daisyui: {
		themes: ['dracula', 'acid', 'cupcake']
	},
	darkMode: 'class',
	plugins: [
		daisyui,
		nextui({
			defaultTheme: 'dark'
		})
	]
};
export default config;
