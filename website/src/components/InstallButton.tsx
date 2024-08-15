"use client";

import { useState } from "react";
import { Copy, CopyCheck } from "lucide-react";
import copy from "clipboard-copy";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/lib/fonts";
import { buttonVariants } from "~/components/ui/button";

export function InstallButton() {
	const [interacted, setInteracted] = useState(false);

	const copyScript = () => {
		copy("npm install discord.js @almostjohn/djs-framework");
		setInteracted(true);
		setTimeout(() => setInteracted(false), 2_000);
	};

	return (
		<div className="flex items-center justify-center place-content-center w-full">
			<button
				className={cn(
					buttonVariants({ variant: "outline", className: "cursor-copy h-[5rem] sm:h-14 md:h-14 lg:h-14" }),
					jetBrainsMono.className,
					"whitespace-normal w-auto max-w-full sm:max-w-md",
				)}
				onClick={copyScript}
			>
				<span className="font-medium mr-2 text-orange-500">$</span>npm install discord.js @almostjohn/djs-framework
				{interacted ? (
					<CopyCheck className="ml-2 h-4 w-4 shrink-0 inline-block text-green-500" aria-hidden />
				) : (
					<Copy className="ml-2 h-4 w-4 shrink-0 inline-block" aria-hidden />
				)}
			</button>
		</div>
	);
}
