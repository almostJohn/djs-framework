"use client";

import * as React from "react";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import copy from "clipboard-copy";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/util/fonts";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";

export function DialogButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="sm">Get Started</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[425px]">
				<DialogHeader className="flex flex-col items-start justify-start">
					<DialogTitle>Bash Script</DialogTitle>
					<DialogDescription className="text-left text-xs">
						Copy this in your terminal and start using the framework.
					</DialogDescription>
				</DialogHeader>
				<InstallButton />
			</DialogContent>
		</Dialog>
	);
}

function InstallButton() {
	const [interacted, setInteracted] = useState<boolean>(false);

	const copyFramework = () => {
		copy("npm install discord.js @almostjohn/djs-framework");
		setInteracted(true);
		setTimeout(() => setInteracted(false), 2_000);
	};

	return (
		<div className="flex flex-col w-full items-center space-y-2">
			<div className="block px-2 py-0.5 border bg-muted rounded-md shadow">
				<span className={cn("text-xs/relaxed", jetBrainsMono.className)}>
					$ <span className="text-orange-400">npm</span>{" "}
					<span className="text-blue-400">install discord.js @almostjohn/djs-framework</span>
				</span>
			</div>
			<Button size="sm" type="button" className="w-full" onClick={copyFramework}>
				{interacted ? (
					<>
						<Check className="mr-2 h-4 w-4" /> Copied
					</>
				) : (
					<>
						<Copy className="mr-2 h-4 w-4" /> Copy
					</>
				)}
			</Button>
		</div>
	);
}
