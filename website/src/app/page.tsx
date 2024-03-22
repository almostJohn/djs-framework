import * as React from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { InstallButton } from "~/components/ui/install-button";
import { cn } from "~/util/cn";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "~/components/page-header";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col container max-w-7xl mx-auto p-4">
			<PageHeader>
				<PageHeaderHeading>
					The <span className="text-blurple">next generation</span> tool to build Discord bots.
				</PageHeaderHeading>
				<PageHeaderDescription>
					djs-framework is a Framework built on top of discord.js Library, a powerful Node.js module that allows you to
					interact with the Discord API very easily. It takes a much more object-oriented approach than most other JS
					Discord libraries, making your bot&apos;s code significantly tidier and easier to comprehend.
				</PageHeaderDescription>
				<PageActions>
					<Link
						href="https://www.npmjs.com/package/@almostjohn/djs-framework"
						rel="noreferrer"
						target="_blank"
						className={cn(buttonVariants({ variant: "outline" }))}
					>
						NPM <ArrowUpRightIcon />
					</Link>
					<Link
						href="https://github.com/almostJohn/djs-framework"
						rel="noreferrer"
						target="_blank"
						className={cn(buttonVariants({ variant: "outline" }))}
					>
						GitHub <ArrowUpRightIcon />
					</Link>
				</PageActions>
				<div className="pt-4" />
				<InstallButton />
			</PageHeader>
		</div>
	);
}
