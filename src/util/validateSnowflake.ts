import type { Snowflake } from "../types/Snowflake.js";

export function validateSnowflake(id: Snowflake) {
	return /^\d{17,20}$/.test(id);
}
