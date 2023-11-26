"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import copy from "clipboard-copy";

export function ButtonCopy() {
	const [copied, setCopied] = useState<boolean>(false);

	const handleClickCopy = () => {
		copy("npm install @almostjohn/djs-framework");
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2_000);
	};

	return (
		<button
			className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg font-mono cursor-copy"
			type="button"
			onClick={handleClickCopy}
		>
			<span className="font-semibold text-blurple">{">"}</span> npm install @almostjohn/djs-framework{" "}
			{copied ? <Check size="15px" /> : <Copy size="15px" />}
		</button>
	);
}
