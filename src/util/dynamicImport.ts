export function dynamicImport<T, R = () => Promise<{ default: T }>>(factory: () => Promise<unknown>) {
	return factory as unknown as R;
}
