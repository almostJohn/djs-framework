"use client";

import * as React from "react";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import copy from "clipboard-copy";
import { cn } from "@/util/cn";

export function InstallButton() {
	const [interacted, setInteracted] = useState<boolean>(false);

	const handleClickCopy = () => {
		copy("npm install @almostjohn/djs-framework");
		setInteracted(true);
		setTimeout(() => setInteracted(false), 2_000);
	};

	return (
		<button
			className={cn(
				"cursor-copy rounded-md border border-neutral-300 bg-neutral-50 px-4 py-2 font-mono hover:bg-neutral-200 dark:border-neutral-700 dark:bg-transparent dark:hover:bg-neutral-800 place-self-center",
			)}
			onClick={handleClickCopy}
			type="button"
		>
			<span className="font-semibold text-blurple">{">"}</span> npm install @almostjohn/djs-framework{" "}
			{interacted ? (
				<Check className="ml-1 inline-block h-4 w-4 text-green-500" />
			) : (
				<Copy className="ml-1 inline-block h-4 w-4" />
			)}
		</button>
	);
}
