import * as React from "react";
import { cn } from "~/lib/utils";

export function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<section
			className={cn("mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10", className)}
			{...props}
		>
			{children}
		</section>
	);
}

export function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			className={cn("text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]", className)}
			{...props}
		/>
	);
}

export function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
	return <p className={cn("text-balance max-w-2xl text-lg font-light text-foreground", className)} {...props} />;
}

export function PageActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("flex w-full items-center justify-start py-2 gap-2", className)} {...props} />;
}
