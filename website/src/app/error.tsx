"use client";

import * as React from "react";
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from "~/components/page-header";

export default function Error({ error }: { readonly error: Error }) {
	console.error(error);

	return (
		<div className="mx-auto flex min-h-screen flex-col items-center justify-center">
			<PageHeader>
				<PageHeaderHeading>500</PageHeaderHeading>
				<PageHeaderDescription>Page Error.</PageHeaderDescription>
			</PageHeader>
		</div>
	);
}
