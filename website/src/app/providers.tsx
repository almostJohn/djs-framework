"use client";

import type { PropsWithChildren } from "react";
import { Provider } from "jotai";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: PropsWithChildren) {
	return (
		<ThemeProvider attribute="class">
			<Provider>{children}</Provider>
		</ThemeProvider>
	);
}
