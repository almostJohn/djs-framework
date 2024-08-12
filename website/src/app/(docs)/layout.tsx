import * as React from "react";
import { DocsNavbar } from "~/components/docs/DocsNavbar";

export default function DocsLayout({ children }: React.PropsWithChildren) {
	return (
		<>
			<DocsNavbar />
			{children}
		</>
	);
}
