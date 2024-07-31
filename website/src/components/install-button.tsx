"use client";

import * as React from "react";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import copy from "clipboard-copy";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/util/fonts";

export function InstallButton() {
	const [interacted, setInteracted] = useState<boolean>(false);

	const handleClickCopy = () => {
		copy("npm install @almostjohn/djs-framework discord.js");
		setInteracted(true);
		setTimeout(() => setInteracted(false), 2_000);
	};

	return (
		<button
			className={cn(
				"cursor-copy rounded-md border border-input bg-background px-4 py-2 font-mono transition-colors place-self-center hover:bg-accent",
				jetBrainsMono.className,
			)}
			onClick={handleClickCopy}
			type="button"
		>
			<span>{">"}</span> npm install discord.js @almostjohn/djs-framework{" "}
			{interacted ? (
				<Check className="ml-1 inline-block h-4 w-4 text-green-500" />
			) : (
				<Copy className="ml-1 inline-block h-4 w-4" />
			)}
		</button>
	);
}
