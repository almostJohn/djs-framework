import * as React from "react";
import { cn } from "~/util/cn";

export function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<section
			className={cn(
				"mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-0",
				className,
			)}
			{...props}
		>
			{children}
		</section>
	);
}

export function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			className={cn(
				"text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]",
				className,
			)}
			{...props}
		/>
	);
}

export function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			className={cn("max-w-[750px] text-center text-lg text-neutral-500 sm:text-xl text-balance", className)}
			{...props}
		/>
	);
}

export function PageActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("flex w-full items-center justify-center space-x-4 py-4 md:pb-0", className)} {...props} />;
}
