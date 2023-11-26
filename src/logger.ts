import process from "node:process";
import { pino } from "pino";
import chalk from "chalk";

type LoggerOptions = {
	[key: string]: any;
};

export const pinoLogger = pino({ name: process.env.LOGGER_NAME! });

export const logger = {
	error(options?: LoggerOptions, ...args: unknown[]) {
		console.log(chalk.red(...args), options);
	},
	warn(options?: LoggerOptions, ...args: unknown[]) {
		console.log(chalk.yellow(...args), options);
	},
	info(options?: LoggerOptions, ...args: unknown[]) {
		console.log(chalk.cyan(...args), options);
	},
	success(options?: LoggerOptions, ...args: unknown[]) {
		console.log(chalk.green(...args), options);
	},
};
