import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex px-6 py-2 gap-2 rounded-md items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-blurple text-neutral-50 hover:bg-blurple/90",
				outline:
					"border border-neutral-300 bg-neutral-50 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-transparent dark:hover:bg-neutral-800",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);
