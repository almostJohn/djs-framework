import type { PropsWithChildren } from "react";
import type { Metadata, Viewport } from "next";
import { inter, jetBrainsMono, fontSans } from "~/lib/fonts";
import { Providers } from "~/app/providers";
import { cn } from "~/lib/utils";
import { siteConfig } from "~/config/site";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";

import "~/styles/globals.css";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
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

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background text-foreground antialiased",
					fontSans.variable,
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<Providers>
					<section className="relative flex flex-col">
						<Navbar />
						{children}
						<Footer />
					</section>
				</Providers>
			</body>
		</html>
	);
}
