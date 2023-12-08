import process from "node:process";
import { pino } from "pino";
import chalk from "chalk";

export const pinoLogger = pino({ name: process.env.LOGGER_NAME });

export type LoggerMetadata = {
	[key: string]: unknown;
};

export enum LogLevels {
	Info = "info",
	Warn = "warn",
	Error = "error",
	Success = "success",
}

export class Logger {
	private logLevel: LogLevels;

	public constructor() {
		this.logLevel = LogLevels.Info;
	}

	public setLogLevel(level: LogLevels): void {
		if (!level) {
			throw new Error("Invalid log level");
		}

		if (Object.values(LogLevels).includes(level)) {
			this.logLevel = level;
		}
	}

	private log(level: LogLevels, message: string, metadata?: LoggerMetadata): void {
		if (Object.values(LogLevels).indexOf(level) >= Object.values(LogLevels).indexOf(this.logLevel)) {
			const timestamp = new Date().toISOString();
			console.log(`[${timestamp}] (${level}): ${message}`, metadata);
		}
	}

	public info(message: string, metadata?: LoggerMetadata): void {
		this.log(LogLevels.Info, chalk.cyan(message), metadata);
	}

	public warn(message: string, metadata?: LoggerMetadata): void {
		this.log(LogLevels.Warn, chalk.yellow(message), metadata);
	}

	public error(message: string, metadata?: LoggerMetadata): void {
		this.log(LogLevels.Error, chalk.red(message), metadata);
	}

	public success(message: string, metadata?: LoggerMetadata): void {
		this.log(LogLevels.Success, chalk.green(message), metadata);
	}
}

export const logger = new Logger();
