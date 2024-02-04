import process from "node:process";
import { pino } from "pino";
import chalk from "chalk";

export const pinoLogger = pino({ name: process.env.LOGGER_NAME });

const { cyan, green, red, yellow } = chalk;

export const logger = {
	info(obj: object, msg?: string | undefined, ...args: unknown[]) {
		pinoLogger.info(cyan(obj), cyan(msg), cyan(...args));
	},
	error(obj: object, msg?: string | undefined, ...args: unknown[]) {
		pinoLogger.error(red(obj), red(msg), red(...args));
	},
	warn(obj: object, msg?: string | undefined, ...args: unknown[]) {
		pinoLogger.warn(yellow(obj), yellow(msg), yellow(...args));
	},
	success(obj: object, msg?: string | undefined, ...args: unknown[]) {
		pinoLogger.info(green(obj), green(msg), green(...args));
	},
};
