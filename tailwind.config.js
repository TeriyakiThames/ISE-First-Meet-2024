/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"gold" : "#C8A263",
				"light-gold" : "#DAC7A6",
				"brown" : "#544122"
			},
			fontFamily: {
				maharlika: ['Maharlika', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
