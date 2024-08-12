import * as React from "react";
import { Announcement } from "~/components/Announcement";
import { InstallButton } from "~/components/InstallButton";
import {
	PageHeader,
	PageHeaderBody,
	PageHeaderContainer,
	PageHeaderDescription,
	PageHeaderTitle,
} from "~/components/PageHeader";

export default function IndexPage() {
	return (
		<main className="relative">
			<PageHeader>
				<PageHeaderContainer>
					<PageHeaderBody>
						<Announcement />
						<PageHeaderTitle>
							Build Your Own <span className="text-[#5865f2]">Discord Bot</span>
						</PageHeaderTitle>
						<PageHeaderDescription>A framework for building discord bot the fastest way.</PageHeaderDescription>
					</PageHeaderBody>
					<InstallButton />
				</PageHeaderContainer>
			</PageHeader>
		</main>
	);
}
