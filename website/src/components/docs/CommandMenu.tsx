"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { DialogProps } from "@radix-ui/react-dialog";
import { File } from "lucide-react";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "~/components/ui/command";
import {
	classItems,
	componentFunctionItems,
	containerFunctionItems,
	constantItems,
	helperFunctionItems,
	typeAliasesItems,
} from "~/lib/docs";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/styles/button";

export function CommandMenu({ ...props }: DialogProps) {
	const [open, setOpen] = React.useState(false);
	const router = useRouter();

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
				if (
					(e.target instanceof HTMLElement && e.target.isContentEditable) ||
					e.target instanceof HTMLInputElement ||
					e.target instanceof HTMLTextAreaElement ||
					e.target instanceof HTMLSelectElement
				) {
					return;
				}

				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const runCommand = React.useCallback((command: () => unknown) => {
		setOpen(false);
		command();
	}, []);

	return (
		<>
			<button
				className={cn(
					buttonVariants({
						variant: "outline",
						className: "text-sm font-normal shadow-none",
					}),
				)}
				onClick={() => setOpen(true)}
				{...props}
			>
				<span className="hidden md:inline-flex">Search documentation...</span>
				<span className="inline-flex md:hidden">Search...</span>
			</button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No Results Found.</CommandEmpty>
					<CommandGroup heading="Class">
						{classItems.map((item) => (
							<CommandItem
								key={item.href}
								value={item.title}
								onSelect={() => {
									runCommand(() => router.push(item.href as string));
								}}
							>
								<File className="mr-2 h-4 w-4" />
								{item.title}
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading="Components">
						{componentFunctionItems.map((item) => (
							<CommandItem
								key={item.href}
								value={item.title}
								onSelect={() => {
									runCommand(() => router.push(item.href as string));
								}}
							>
								<File className="mr-2 h-4 w-4" />
								{item.title}
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading="Containers">
						{containerFunctionItems.map((item) => (
							<CommandItem
								key={item.href}
								value={item.title}
								onSelect={() => {
									runCommand(() => router.push(item.href as string));
								}}
							>
								<File className="mr-2 h-4 w-4" />
								{item.title}
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading="Constants">
						{constantItems.map((item) => (
							<CommandItem
								key={item.href}
								value={item.title}
								onSelect={() => {
									runCommand(() => router.push(item.href as string));
								}}
							>
								<File className="mr-2 h-4 w-4" />
								{item.title}
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading="Helper Functions">
						{helperFunctionItems.map((item) => (
							<CommandItem
								key={item.href}
								value={item.title}
								onSelect={() => {
									runCommand(() => router.push(item.href as string));
								}}
							>
								<File className="mr-2 h-4 w-4" />
								{item.title}
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading="Type Aliases">
						{typeAliasesItems.map((item) => (
							<CommandItem
								key={item.href}
								value={item.title}
								onSelect={() => {
									runCommand(() => router.push(item.href as string));
								}}
							>
								<File className="mr-2 h-4 w-4" />
								{item.title}
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
