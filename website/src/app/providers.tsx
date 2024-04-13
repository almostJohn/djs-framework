"use client";

import * as React from "react";
import { Provider } from "jotai";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { readonly children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class">
			<Provider>{children}</Provider>
		</ThemeProvider>
	);
}
