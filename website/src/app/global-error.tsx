"use client";

import type { Metadata } from "next";
import { inter } from "@/util/fonts";

import "../styles/custom.css";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: {
		default: "djs-framework",
		template: "% | djs-framework",
	},
};

export default function GlobalError({ error }: { readonly error: Error }) {
	console.error(error);

	return (
		<html className={inter.variable} lang="en" suppressHydrationWarning>
			<body className="antialiased">
				<main className="mx-auto max-w-2xl min-h-screen">
					<div className="mx-auto max-w-lg min-h-screen flex flex-col place-content-center place-items-center gap-8 px-8 py-16 lg:px-6 lg:py-0">
						<h1 className="text-[6rem] font-black leading-none md:text-[3rem]">500</h1>
						<h2 className="text-[3rem] md:text-[3rem] text-center">Error.</h2>
					</div>
				</main>
			</body>
		</html>
	);
}
