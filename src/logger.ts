import process from "node:process";
import { pino } from "pino";
import chalk from "chalk";

type LoggerOptions = {
	[key: string]: unknown;
};

export const pinoLogger = pino({ name: process.env.LOGGER_NAME! });

export const logger = {
	error(options?: LoggerOptions, ...args: unknown[]) {
		console.log(chalk.red(...args), JSON.stringify(options));
	},
	warn(options?: LoggerOptions, ...args: unknown[]) {
		console.log(chalk.yellow(...args), JSON.stringify(options));
	},
	info(options?: LoggerOptions, ...args: unknown[]) {
		console.log(chalk.cyan(...args), JSON.stringify(options));
	},
	success(options?: LoggerOptions, ...args: unknown[]) {
		console.log(chalk.green(...args), JSON.stringify(options));
	},
};
