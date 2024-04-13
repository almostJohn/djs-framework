import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, Info } from "lucide-react";
import { Separator } from "./ui/separator";

export function Announcement() {
	return (
		<Link
			href="https://discord.js.org"
			className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
		>
			<Info className="h-4 w-4" /> <Separator className="mx-2 h-4" orientation="vertical" />{" "}
			<span>Learn discord.js</span>
			<ArrowRightIcon className="ml-1 h-4 w-4" />
		</Link>
	);
}
