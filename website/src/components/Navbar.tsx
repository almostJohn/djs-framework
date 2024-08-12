import * as React from "react";
import Link from "next/link";
import { SiGithub as GitHub } from "@icons-pack/react-simple-icons";
import { ModeToggle } from "~/components/ModeToggle";
import { buttonVariants } from "~/styles/button";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full bg-neutral-100/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-100/60 dark:bg-neutral-900/95 dark:backdrop-blur dark:supports-[backdrop-filter]:bg-neutral-900/60">
			<div className="flex container max-w-7xl h-20 items-center justify-between">
				<div className="flex items-center">
					<Link href="/" className="text-xl font-bold tracking-tight">
						<span className="hidden md:block">
							d<span className="text-yellow-500">js</span>-framework
						</span>
						<span className="block md:hidden">
							d<span className="text-yellow-500">js</span>
						</span>
					</Link>
				</div>
				<div className="flex items-center gap-2">
					<a
						href={siteConfig.links.github}
						className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
						rel="noreferrer"
						target="_blank"
					>
						<GitHub className="h-5 w-5" aria-hidden />
					</a>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
