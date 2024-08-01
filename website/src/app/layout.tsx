import * as React from "react";
import type { Metadata, Viewport } from "next";
import { inter, jetBrainsMono, fontSans } from "~/util/fonts";
import { Providers } from "./providers";
import { cn } from "~/lib/utils";
import { siteConfig } from "~/config/site";
import { SiteHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";

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
					"bg-background text-foreground antialiased",
					fontSans.variable,
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<Providers>
					<div className="relative min-h-screen flex flex-col">
						<SiteHeader />
						{children}
						<SiteFooter />
					</div>
				</Providers>
			</body>
		</html>
	);
}
