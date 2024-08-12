import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, CodeXml } from "lucide-react";
import { Separator } from "~/components/ui/separator";

export function Announcements() {
	return (
		<Link href="https://discord.js.org" className="group inline-flex items-center px-0.5 text-sm font-medium">
			<CodeXml className="h-4 w-4" /> <Separator className="mx-2 h-4" orientation="vertical" />
			<span className="underline-offset-4 group-hover:underline">Learn discord.js</span>
			<ArrowRightIcon className="ml-1 h-4 w-4" />
		</Link>
	);
}
