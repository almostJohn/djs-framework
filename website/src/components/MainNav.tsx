"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "~/lib/utils";

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="hidden items-center space-x-6 md:flex">
			{mainNav.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						"transition-colors text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100",
						pathname === item.href
							? "text-neutral-900 dark:text-neutral-100"
							: "hover:text-neutral-900 dark:hover:text-neutral-100",
					)}
				>
					{item.title}
				</Link>
			))}
		</div>
	);
}

const mainNav = [
	{
		title: "Docs",
		href: "/docs",
	},
	{
		title: "FAQ",
		href: "/faq",
	},
];
