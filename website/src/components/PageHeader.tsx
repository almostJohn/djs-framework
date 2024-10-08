import * as React from "react";
import { cn } from "~/lib/utils";

export function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<section className={cn("flex flex-col items-center justify-center py-12 md:py-24 lg:py-32", className)} {...props}>
			{children}
		</section>
	);
}

export function PageHeaderContainer({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("container space-y-6 text-center", className)} {...props}>
			{children}
		</div>
	);
}

export function PageHeaderBody({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("space-y-4", className)} {...props}>
			{children}
		</div>
	);
}

export function PageHeaderTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			className={cn(
				"text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.1]",
				className,
			)}
			{...props}
		/>
	);
}

export function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
	return <p className={cn("mx-auto max-w-[700px] text-muted-foreground md:text-xl", className)} {...props} />;
}
