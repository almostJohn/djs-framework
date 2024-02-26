import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { inter, jetBrainsMono } from "@/util/fonts";
import { Providers } from "./providers";

import "../styles/custom.css";
import "../styles/globals.css";

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
		{ media: "(prefers-color-scheme: dark)", color: "#171717" },
	],
	colorScheme: "light dark",
} satisfies Viewport;

export const metadata = {
	title: {
		default: "djs-framework",
		template: "% | djs-framework",
	},
	icons: {
		other: [
			{
				url: "/djs-framework.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/djs-framework.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
	},
	other: {
		"msapplication-TileColor": "#171717",
	},
} satisfies Metadata;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html className={`${inter.variable} ${jetBrainsMono.variable}`} lang="en" suppressHydrationWarning>
			<body className="antialiased bg-light dark:bg-dark dark:text-white">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
