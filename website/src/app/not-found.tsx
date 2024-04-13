import * as React from "react";
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from "~/components/page-header";

export default function NotFound() {
	return (
		<div className="mx-auto flex min-h-screen flex-col items-center justify-center">
			<PageHeader>
				<PageHeaderHeading>404</PageHeaderHeading>
				<PageHeaderDescription>Page not Found.</PageHeaderDescription>
			</PageHeader>
		</div>
	);
}
