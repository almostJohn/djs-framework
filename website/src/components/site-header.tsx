import * as React from "react";
import Link from "next/link";
import { SiGithub as GitHub } from "@icons-pack/react-simple-icons";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/96 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex max-w-screen-2xl h-14 items-center justify-between">
				<div className="flex items-center">
					<Link href="/" className="text-lg font-bold leading-tight tracking-tighter">
						d<span className="text-yellow-600">.js</span>-framework
					</Link>
				</div>
				<div className="flex items-center gap-2">
					<Link
						href="https://github.com/almostJohn/djs-framework"
						className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
					>
						<GitHub className="h-5 w-5" />
					</Link>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
