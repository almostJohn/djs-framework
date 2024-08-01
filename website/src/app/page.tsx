import * as React from "react";
import Link from "next/link";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "~/components/page-header";
import { Announcement } from "~/components/announcement";
import { Button } from "~/components/ui/button";
import { DialogButton } from "~/components/install-button";
import { MobilePreview } from "~/components/mobile-preview";
import { MainPreview } from "~/components/main-preview";

export default function IndexPage() {
	return (
		<main className="flex-1">
			<div className="container relative">
				<PageHeader>
					<Announcement />
					<PageHeaderHeading>Build your own discord bot</PageHeaderHeading>
					<PageHeaderDescription>A framework for building discord bot the fastest way.</PageHeaderDescription>
					<PageActions>
						<DialogButton />
						<Button size="sm" variant="ghost" asChild>
							<Link href="https://github.com/almostJohn/djs-framework">GitHub</Link>
						</Button>
					</PageActions>
				</PageHeader>
				<MobilePreview />
				<MainPreview />
			</div>
		</main>
	);
}
