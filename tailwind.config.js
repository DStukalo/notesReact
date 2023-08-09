/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
		'./src/App/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		colors: {
			primary: {
				100: 'rgb(var(--color-primary-a1) / <alpha-value>)',
				200: 'rgb(var(--color-primary-a2) / <alpha-value>)',
				300: 'rgb(var(--color-primary-a3) / <alpha-value>)',
			},
			secondary: {
				100: 'rgb(var(--color-secondary-a1) / <alpha-value>)',
				200: 'rgb(var(--color-secondary-a2) / <alpha-value>)',
			},
			tertiary: {
				100: 'rgb(var(--color-tertiary-a1) / <alpha-value>)',
			},
			disabled: 'rgb(var(--color-disabled) / <alpha-value>)',
			error: 'rgb(var(--color-error) / <alpha-value>)',
		},
		extend: {
			fontFamily: {
				arsenal: ['Arsenal', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
