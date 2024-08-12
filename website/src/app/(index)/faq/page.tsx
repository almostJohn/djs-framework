import * as React from "react";
import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";

export const metadata: Metadata = {
	title: "FAQ",
};

export default function FaqPage() {
	return (
		<main className="relative">
			<div className="mx-auto container flex max-w-4xl items-center justify-center pt-6 pb-12 md:pb-24 lg:pb-32">
				<Accordion type="single" collapsible className="w-full">
					{faqItems.map((item, i) => (
						<AccordionItem key={i} value={item.value}>
							<AccordionTrigger>{item.title}</AccordionTrigger>
							<AccordionContent>{item.description}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</main>
	);
}

const faqItems = [
	{
		value: "item-1",
		title: "What is djs-framework?",
		description:
			"djs-framework is a powerful and flexible framework designed to streamline the process of building Discord bots. It is built on top of the popular discord.js library, providing additional tools, utilities, and structures to simplify bot development.",
	},
	{
		value: "item-2",
		title: "How does djs-framework differ from discord.js?",
		description:
			"While discord.js provides the core functionality needed to interact with the Discord API, djs-framework adds a layer of abstraction and convenience. It includes built-in features like command handling, event management, and more, reducing the amount of boilerplate code you need to write and allowing you to focus on creating unique bot features.",
	},
	{
		value: "item-3",
		title: "Who is djs-framework suitable for?",
		description:
			"djs-framework is suitable for both beginners and experienced developers. If you are new to Discord bot development, the framework’s structured approach can help you get started quickly. For seasoned developers, it offers advanced features that save time and enhance the maintainability of larger projects.",
	},
	{
		value: "item-4",
		title: "Can I use existing discord.js plugins with djs-framework?",
		description:
			"Yes, djs-framework is fully compatible with existing discord.js plugins and libraries. Since it’s built on top of discord.js, you can easily integrate your favorite plugins and extend the functionality of your bots without any hassle.",
	},
	{
		value: "item-5",
		title: "How do I get started with djs-framework?",
		description:
			"Getting started with djs-framework is simple! Visit our documentation for detailed guides on installation, setup, and creating your first bot. The framework is designed to be intuitive, and with our step-by-step tutorials, you’ll have your bot up and running in no time.",
	},
];
