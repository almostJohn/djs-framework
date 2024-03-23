import * as React from "react";
import { Info } from "lucide-react";

export function Announcement() {
	return (
		<div className="inline-flex items-center rounded-lg bg-neutral-200 dark:bg-neutral-800 px-3 py-1 text-sm font-medium">
			<Info className="mr-1 h-4 w-4" />
			<span>Only supports TypeScript files.</span>
		</div>
	);
}
