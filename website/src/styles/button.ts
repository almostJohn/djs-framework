import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/90 dark:hover:bg-neutral-900/90",
				destructive: "bg-red-600 text-neutral-100 hover:bg-red-600/90",
				outline:
					"border border-neutral-200 bg-transparent dark:border dark:border-neutral-800 dark:bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-800",
				ghost: "hover:bg-neutral-200 dark:hover:bg-neutral-800",
			},
			size: {
				default: "h-10 px-4 py-2",
				lg: "h-11 rounded-md px-8",
				sm: "h-9 rounded-md px-3",
				xs: "h-8 rounded-md px-2 py-0.5",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);
