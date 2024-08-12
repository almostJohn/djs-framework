import * as React from "react";
import { Announcements } from "~/components/Announcements";
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
						<Announcements />
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
