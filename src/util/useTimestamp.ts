import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import utc from "dayjs/plugin/utc.js";
import { type TimestampStylesString, time } from "discord.js";

dayjs.extend(relativeTime);
dayjs.extend(utc);

export function useTimestamp(timestamp: number, style: TimestampStylesString) {
	return time(dayjs(timestamp).unix(), style);
}
