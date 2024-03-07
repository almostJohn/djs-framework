import * as React from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { InstallButton } from "@/components/ui/InstallButton";
import { cn } from "@/util/cn";

export default function Page() {
	return (
		<div className="min-h-screen">
			<div className="mx-auto max-w-6xl flex flex-col place-items-center gap-24 px-8 pb-16 pt-12 lg:min-h-[calc(100vh_-_40px)] lg:place-content-center lg:py-10">
				<div className="flex flex-col place-items-center gap-10 lg:flex-row lg:gap-6">
					<div className="flex flex-col place-items-center gap-10 text-center">
						<h1 className="text-3xl font-black leading-tight sm:text-7xl sm:leading-tight">
							The <span className="relative rounded bg-blurple px-3 py-1 text-white">next generation</span> tool to
							build Discord bots.
						</h1>
						<p className="py-6 leading-normal text-gray-400">
							djs-framework is a Framework built on top of discord.js Library, a powerful Node.js module that allows you
							to interact with the Discord API very easily. It takes a much more object-oriented approach than most
							other JS Discord libraries, making your bot&apos;s code significantly tidier and easier to comprehend.
						</p>
						<div className="flex flex-wrap place-content-center gap-4 md:flex-row">
							<a
								className={cn(
									"inline-flex rounded-md border border-transparent bg-blurple px-6 py-2 font-medium text-neutral-50",
								)}
								href="https://github.com/almostJohn/djs-framework/blob/main/website/README.md"
								rel="noreferrer"
								target="_blank"
							>
								Docs
							</a>
							<a
								className={cn(
									"inline-flex gap-2 rounded-md border border-neutral-300 bg-neutral-50 px-6 py-2 font-medium hover:bg-neutral-200 dark:border-neutral-700 dark:bg-transparent dark:hover:bg-neutral-800",
								)}
								href="https://www.npmjs.com/package/@almostjohn/djs-framework"
								rel="noreferrer"
								target="_blank"
							>
								NPM <ArrowUpRightIcon />
							</a>
							<a
								className={cn(
									"inline-flex gap-2 rounded-md border border-neutral-300 bg-neutral-50 px-6 py-2 font-medium hover:bg-neutral-200 dark:border-neutral-700 dark:bg-transparent dark:hover:bg-neutral-800",
								)}
								href="https://github.com/almostJohn/djs-framework"
								rel="noreferrer"
								target="_blank"
							>
								GitHub <ArrowUpRightIcon />
							</a>
						</div>
						<InstallButton />
					</div>
				</div>
			</div>
		</div>
	);
}
