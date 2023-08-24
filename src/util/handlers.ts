import "reflect-metadata";
import { URL, fileURLToPath } from "node:url";
import readdirp, { type ReaddirpStream } from "readdirp";

export function handleCommands<T extends ReaddirpStream>(pathName: string): T {
	const commandFiles = readdirp(fileURLToPath(new URL(pathName, import.meta.url)), {
		fileFilter: "*.js",
		directoryFilter: "!sub",
	});

	return commandFiles as T;
}

export function handleEvents<T extends ReaddirpStream>(pathName: string): T {
	const eventFiles = readdirp(fileURLToPath(new URL(pathName, import.meta.url)), {
		fileFilter: "*.js",
	});

	return eventFiles as T;
}
