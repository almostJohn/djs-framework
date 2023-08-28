import process from "node:process";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";

export async function deployCommands(rest: REST, loadCommands: [], isGlobal = true) {
	if (!isGlobal) {
		try {
			console.log("Guilded interaction (/) commands started");

			await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID!, process.env.GUILD_ID!), {
				body: loadCommands,
			});

			console.log("Guilded interaction (/) commands reloaded");
		} catch (error) {
			console.error(error);
		}
	} else {
		try {
			console.log("Global interaction (/) commands started");

			await rest.put(Routes.applicationCommands(process.env.CLIENT_ID!), {
				body: loadCommands,
			});

			console.log("Global interaction (/) commands reloaded");
		} catch (error) {
			console.error(error);
		}
	}
}
