import "reflect-metadata";
import { URL, fileURLToPath } from "node:url";
import readdirp, { type ReaddirpStream } from "readdirp";

export const enum Path {
	Commands = "commands",
	Events = "events",
}

export function handle<T extends ReaddirpStream, P extends Path = Path.Commands>(path: P): T {
	if (path === Path.Commands) {
		return readdirp(fileURLToPath(new URL(path, import.meta.url)), {
			fileFilter: "*.js",
			directoryFilter: "!sub",
		}) as T;
	} else {
		return readdirp(fileURLToPath(new URL(path, import.meta.url)), {
			fileFilter: "*.js",
		}) as T;
	}
}
