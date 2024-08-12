import * as React from "react";
import Link from "next/link";
import { AlignLeft } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/styles/button";

export function MobileNav() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					className={cn(
						buttonVariants({
							variant: "ghost",
							className: "hover:bg-transparent dark:hover:bg-transparent md:hidden",
							size: "icon",
						}),
					)}
				>
					<AlignLeft className="h-5 w-5" />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-neutral-100 dark:bg-neutral-900" align="start">
				<DropdownMenuItem className="focus:bg-neutral-200 dark:focus:bg-neutral-800">
					<Link href="/docs">Docs</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className="focus:bg-neutral-200 dark:focus:bg-neutral-800">
					<Link href="/faq">FAQ</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
