import * as React from "react";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/util/fonts";

const TEMPLATE_IMPORT_PROCESS = "{ process }";
const TEMPLATE_IMPORT_FROM_FRAMEWORK = "{ createClient, createCommands }";
const TEMPLATE_IMPORT_FROM_DISCORDJS = "{ GatewayIntentBits }";
const TEMPLATE_CLIENT = `createClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});`;
const TEMPLATE_DOCS = "// instantiate commands";

export function MainPreview() {
	return (
		<section className="hidden px-4 py-2 rounded-lg shadow bg-muted border md:block">
			<div className={cn("flex flex-col space-y-6", jetBrainsMono.className)}>
				<p>
					<span className="text-red-400">import</span> {TEMPLATE_IMPORT_PROCESS}{" "}
					<span className="text-red-400">from</span> <span className="text-blue-400">&quot;node:process&quot;;</span>
					<br />
					<span className="text-red-400">import</span> {TEMPLATE_IMPORT_FROM_DISCORDJS}{" "}
					<span className="text-red-400">from</span> <span className="text-blue-400">&quot;discord.js&quot;;</span>
					<br />
					<span className="text-red-400">import</span> {TEMPLATE_IMPORT_FROM_FRAMEWORK}{" "}
					<span className="text-red-400">from</span>{" "}
					<span className="text-blue-400">&quot;@almostjohn/djs-framework&quot;;</span>
				</p>
				<p>
					<span className="text-red-400">const</span> <span className="text-blue-500">client</span> = {TEMPLATE_CLIENT}
				</p>
				<p>
					<span className="text-muted-foreground">{TEMPLATE_DOCS}</span>
					<br />
					<span className="text-blue-500">createCommands()</span>
				</p>
				<p>
					<span className="text-red-400">client</span>.login(process.env.DISCORD_TOKEN);
				</p>
			</div>
		</section>
	);
}
