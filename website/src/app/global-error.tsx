"use client";

import type { Metadata, Viewport } from "next";
import { inter } from "~/util/fonts";
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

export default function GlobalError({ error }: { readonly error: Error }) {
	console.error(error);

	return (
		<html className={inter.variable} lang="en" suppressHydrationWarning>
			<body className="antialiased bg-light dark:bg-dark dark:text-white">
				<Providers>
					<main className="mx-auto max-w-2xl min-h-screen">
						<div className="mx-auto max-w-lg min-h-screen flex flex-col place-content-center place-items-center gap-8 px-8 py-16 lg:px-6 lg:py-0">
							<h1 className="text-[6rem] font-black leading-none md:text-[3rem]">500</h1>
							<h2 className="text-[3rem] md:text-[3rem] text-center">Error.</h2>
						</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
