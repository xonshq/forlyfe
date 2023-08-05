/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				lora: ['Lora', 'serif'],
				arimo: ['Arimo', 'sans-serif']
			}
		}
	},
	plugins: []
};
