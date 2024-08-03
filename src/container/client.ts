import { Client, type ClientOptions } from "discord.js";
import { container } from "tsyringe";

export function createClient(options: ClientOptions) {
	const client = new Client(options);
	container.register(Client, { useValue: client });

	return client;
}
