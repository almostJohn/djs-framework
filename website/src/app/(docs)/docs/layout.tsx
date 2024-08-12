import * as React from "react";
import { DocsNavbar } from "~/components/docs/DocsNavbar";

export default function DocsLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<>
			<DocsNavbar />
			{children}
		</>
	);
}
