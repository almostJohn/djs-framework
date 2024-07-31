import * as React from "react";
import {
	PageActions,
	PageHeader,
	PageHeaderBody,
	PageHeaderContainer,
	PageHeaderDescription,
	PageHeaderHeading,
} from "~/components/page-header";
import { InstallButton } from "~/components/install-button";
import { Announcement } from "~/components/announcement";

const templateImport = "{ createClient }";

export default function IndexPage() {
	return (
		<main className="flex-1">
			<div className="relative">
				<PageHeader>
					<PageHeaderContainer>
						<PageHeaderBody>
							<Announcement />
							<PageHeaderHeading>Build your own discord bot</PageHeaderHeading>
							<PageHeaderDescription>A framework for building discord bot the fastest way.</PageHeaderDescription>
							<PageActions>
								<InstallButton />
							</PageActions>
						</PageHeaderBody>
					</PageHeaderContainer>
					<div className="px-4 pt-6">
						<div className="block p-4 border bg-muted rounded-lg shadow">
							<div className="flex flex-col space-y-4">
								<p className="text-sm/relaxed font-mono">
									<span className="text-red-400">import</span> {templateImport}{" "}
									<span className="text-red-400">from</span>{" "}
									<span className="text-blue-400">&quot;@almostjohn/djs-framework&quot;</span>;
									<br />
									<br />
									<span className="text-sky-400">const</span> <span className="text-orange-400">client</span> ={" "}
									<span className="text-yellow-500">createClient</span>();
									<br />
									<br />
									<span className="text-orange-400">client</span>.login(
									<span className="text-blue-400">&quot;token&quot;</span>);
								</p>
							</div>
						</div>
					</div>
				</PageHeader>
			</div>
		</main>
	);
}
