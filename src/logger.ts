import process from "node:process";
import { pino } from "pino";
import chalk from "chalk";

export const pinoLogger = pino({ name: process.env.LOGGER_NAME! });

export const logger = {
	error(...args: unknown[]) {
		console.log(chalk.red(...args));
	},
	warn(...args: unknown[]) {
		console.log(chalk.yellow(...args));
	},
	info(...args: unknown[]) {
		console.log(chalk.cyan(...args));
	},
	success(...args: unknown[]) {
		console.log(chalk.green(...args));
	},
};
