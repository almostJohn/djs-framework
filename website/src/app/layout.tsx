import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { inter } from "@/util/fonts";

import "../styles/custom.css";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: {
		default: "djs-framework",
		template: "% | djs-framework",
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html className={inter.variable} lang="en" suppressHydrationWarning>
			<body className="antialiased">{children}</body>
		</html>
	);
}
