import process from "node:process";
import { pino } from "pino";
import chalk from "chalk";

export const pinoLogger = pino({ name: process.env.LOGGER_NAME });

export const logger = {
	error(...args: unknown[]) {
		console.log(chalk.red(...args));
	},
	info(...args: unknown[]) {
		console.log(chalk.cyan(...args));
	},
	warn(...args: unknown[]) {
		console.log(chalk.yellow(...args));
	},
	success(...args: unknown[]) {
		console.log(chalk.green(...args));
	},
};
