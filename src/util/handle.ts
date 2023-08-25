import "reflect-metadata";
import { URL, fileURLToPath } from "node:url";
import readdirp, { type ReaddirpStream } from "readdirp";

export type Path = "commands" | "events";

export function handle<T extends ReaddirpStream, P extends Path>(path: P): T {
	if (path === "commands") {
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
