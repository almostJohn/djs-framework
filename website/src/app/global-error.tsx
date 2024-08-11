"use client";

import type { Metadata, Viewport } from "next";
import { inter, fontSans, jetBrainsMono } from "~/util/fonts";
import { Providers } from "./providers";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

import "../styles/globals.css";

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
					"bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 antialiased",
					fontSans.variable,
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<Providers>
					<div className="flex flex-1 flex-col items-center justify-center space-y-2 py-12 md:py-24 lg:py-32">
						<h1 className="text-[6rem] font-bold leading-none tracking-tight md:text-[12rem] lg:[16rem]">500</h1>
						<p className="text-center text-neutral-500 text-[3rem]">Error</p>
					</div>
				</Providers>
			</body>
		</html>
	);
}
