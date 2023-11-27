"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import copy from "clipboard-copy";

export function InstallButton() {
	const [interacted, setInteracted] = useState<boolean>(false);

	const handleClickCopy = () => {
		copy("npm install @almostjohn/djs-framework");
		setInteracted(true);
		setTimeout(() => setInteracted(false), 2_000);
	};

	return (
		<button
			className="bg-light text-dark dark:bg-dark dark:text-light border border-light dark:border-gray-500 hover:border-dark dark:hover:border-light rounded mx-auto px-4 py-4 cursor-copy font-mono"
			onClick={handleClickCopy}
			type="button"
		>
			<span className="font-semibold text-blurple">{">"}</span> npm install @almostjohn/djs-framework{" "}
			{interacted ? <Check className="ml-1 inline-block text-green-500" /> : <Copy className="ml-1 inline-block" />}
		</button>
	);
}
