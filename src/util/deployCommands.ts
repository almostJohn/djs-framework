import process from "node:process";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";

export function loadCommands<T extends []>(commands: T): T {
	return commands;
}

export async function deployCommands(rest: REST, loadCommands: [], isGuildRegister = true) {
	if (!isGuildRegister) {
		try {
			console.log("Started refresing guilded interaction (/) commands");

			await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID!, process.env.GUILD_ID!), {
				body: loadCommands,
			});

			console.log("Successfully reloaded guilded interaction (/) commands");
		} catch (error) {
			console.error(error);
		}
	} else {
		try {
			console.log("Started refreshing globally interaction (/) commands");

			await rest.put(Routes.applicationCommands(process.env.CLIENT_ID!), {
				body: loadCommands,
			});

			console.log("Successfully reloaded globally interaction (/) commands");
		} catch (error) {
			console.error(error);
		}
	}
}
