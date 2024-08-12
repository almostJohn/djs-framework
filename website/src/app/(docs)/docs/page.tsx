import * as React from "react";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/styles/button";

export const metadata: Metadata = {
	title: "Docs",
};

export default function DocsPage() {
	return (
		<main className="relative">
			<div className="mx-auto container flex flex-col space-y-6 max-w-4xl pt-6 pb-12 md:pb-24 lg:pb-32">
				<div className="flex items-center gap-2">
					<h1 className="text-lg text-neutral-500 font-medium">Docs</h1>/
					<h1 className="text-lg font-medium">Introduction</h1>
				</div>
				<div className="flex flex-col space-y-2">
					<h1 className="text-2xl font-bold leading-tight tracking-tight">Introduction</h1>
					<p className="text-xl text-neutral-500">A framework for building discord bot the fastest way.</p>
				</div>
				<div className="flex flex-col space-y-4">
					<p className="text-xl font-medium">
						This is NOT a library to interact directly with the Discord API; it uses discord.js as its underlying
						library. This framework is designed for convenience and simplicity in creating a Discord bot.
					</p>
					<p className="text-xl font-medium">What do you mean it&apos;s not a library?</p>
					<p className="text-xl text-neutral-500">
						I mean, you should not install this package without the actual discord.js library. You need discord.js to
						interact with the Discord API.
					</p>
					<p className="text-xl italic">Use this as reference to build your Discord bot.</p>
					<div className="flex items-center justify-end">
						<a href="/docs/installation" className={cn(buttonVariants({ variant: "outline" }))}>
							Installation
							<ChevronRight className="h-4 w-4 ml-2" />
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
