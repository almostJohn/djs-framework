"use client";

import type { Metadata, Viewport } from "next";
import { inter, fontSans, jetBrainsMono } from "~/util/fonts";
import { Providers } from "./providers";
import { siteConfig } from "~/config/site";
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from "~/components/page-header";

import "../styles/default-styles.css";
import "../styles/globals.css";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
	title: siteConfig.title,
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "light" },
		{ media: "(prefers-color-scheme: dark)", color: "dark" },
	],
};

export default function GlobalError({ error }: { readonly error: Error }) {
	console.error(error);

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
				<Providers>
					<div className="mx-auto flex min-h-screen flex-col items-center justify-center">
						<PageHeader>
							<PageHeaderHeading>500</PageHeaderHeading>
							<PageHeaderDescription>Page Error.</PageHeaderDescription>
						</PageHeader>
					</div>
				</Providers>
			</body>
		</html>
	);
}
