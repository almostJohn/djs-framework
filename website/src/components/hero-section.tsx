import * as React from "react";
import { PageHeader, PageActions, PageHeaderDescription, PageHeaderHeading } from "./page-header";
import { Announcement } from "./announcement";
import { siteConfig } from "~/config/site";
import { InstallButton } from "./install-button";

export function HeroSection() {
	return (
		<div className="container relative">
			<PageHeader>
				<Announcement />
				<PageHeaderHeading>Build your own Discord bot</PageHeaderHeading>
				<PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
				<PageActions>
					<InstallButton />
				</PageActions>
			</PageHeader>
		</div>
	);
}
