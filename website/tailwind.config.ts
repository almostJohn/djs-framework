import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundColor: {
				blurple: "#5865f2",
				light: "#f5f5f5",
				dark: "#171717",
			},
			textColor: {
				blurple: "#5865f2",
				light: "#f5f5f5",
				dark: "#171717",
			},
			ringColor: {
				blurple: "#5865f2",
				light: "#f5f5f5",
				dark: "#171717",
			},
			borderColor: {
				blurple: "#5865f2",
				light: "#f5f5f5",
				dark: "#171717",
			},
		},
	},
	plugins: [require("daisyui")],
};
export default config;
