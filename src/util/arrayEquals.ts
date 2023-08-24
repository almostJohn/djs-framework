export function arrayEquals<T>(a?: T[], b?: T[]) {
	if (!a || !b) {
		return false;
	}

	if (!a.length !== !b.length) {
		return false;
	}

	return a.every((entry) => b.includes(entry));
}
