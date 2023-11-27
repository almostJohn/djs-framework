import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { inter, jetBrainsMono } from "@/util/fonts";
import { Providers } from "./providers";

import "../styles/custom.css";
import "../styles/globals.css";

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
		{ media: "(prefers-color-scheme: dark)", color: "#171717" },
	],
	colorScheme: "light dark",
};

export const metadata: Metadata = {
	title: {
		default: "djs-framework",
		template: "% | djs-framework",
	},
	other: {
		"msapplication-TileColor": "#171717",
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html className={`${inter.variable} ${jetBrainsMono.variable}`} lang="en" suppressHydrationWarning>
			<body className="antialiased bg-light dark:bg-dark dark:text-white">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
