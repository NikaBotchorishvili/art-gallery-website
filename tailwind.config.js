/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			white: "#fff",
			grey: "#444444",
			main: "#151515",
			secondary: "#D5966C",
		},
		fontFamily: {
			main: "'Big Shoulders Display', sans-serif",
		},
	
		extend: {
			flex: {
				'2': '2 2 0%'
			},
			minWidth: {
				xs: "320px"
			}
		},
	},
	plugins: [],
};
