import type { Webhook } from "discord.js";
import { container } from "tsyringe";
import { kWebhooks } from "./tokens.js";

export function createWebhooks<W extends Webhook = Webhook>() {
	const webhooks = new Map<string, W>();
	container.register(kWebhooks, { useValue: webhooks });

	return webhooks;
}
