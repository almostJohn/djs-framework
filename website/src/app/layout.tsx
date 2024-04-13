import * as React from "react";
import type { Metadata, Viewport } from "next";
import { inter, jetBrainsMono, fontSans } from "~/util/fonts";
import { Providers } from "./providers";
import { cn } from "~/lib/utils";
import { siteConfig } from "~/config/site";

import "../styles/default-styles.css";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: siteConfig.title,
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
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "light" },
		{ media: "(prefers-color-scheme: dark)", color: "dark" },
	],
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background antialiased",
					fontSans.variable,
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
