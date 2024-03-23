import * as React from "react";
import type { Metadata, Viewport } from "next";
import { inter, jetBrainsMono } from "~/util/fonts";
import { Providers } from "./providers";

import "../styles/custom.css";
import "../styles/globals.css";

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "dark" },
	],
	colorScheme: "light dark",
} satisfies Viewport;

export const metadata = {
	title: {
		default: "djs-framework",
		template: "%s - djs-framework",
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
} satisfies Metadata;

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html className={`${inter.variable} ${jetBrainsMono.variable}`} lang="en" suppressHydrationWarning>
			<body className="antialiased bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
