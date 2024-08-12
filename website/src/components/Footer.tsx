import * as React from "react";
import { SiVercel as Vercel, SiGithub as GitHub, SiNpm as NPM } from "@icons-pack/react-simple-icons";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/styles/button";

export function Footer() {
	return (
		<footer className="p-10 w-full space-y-6">
			<div className="flex justify-center gap-4">
				<a
					href={siteConfig.links.npm}
					className={cn(buttonVariants({ variant: "destructive" }))}
					rel="noreferrer"
					target="_blank"
				>
					<NPM className="h-5 w-5 mr-2" aria-hidden /> NPM
				</a>
				<a href={siteConfig.links.github} className={cn(buttonVariants())} rel="noreferrer" target="_blank">
					<GitHub className="h-5 w-5 mr-2" /> GitHub
				</a>
			</div>
			<div className="flex justify-center">
				<a
					href="https://vercel.com"
					rel="noreferrer"
					target="_blank"
					className="inline-flex items-center justify-center rounded-md gap-2 bg-black text-white px-6 py-2 h-12 transition-colors hover:bg-black/90"
				>
					<Vercel className="h-7 w-7" />
					Powered by Vercel
				</a>
			</div>
		</footer>
	);
}
