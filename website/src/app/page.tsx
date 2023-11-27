import { ArrowUpRight } from "lucide-react";
import { InstallButton } from "@/components/ui/InstallButton";

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
						<p className="py-6 leading-normal text-neutral-800 dark:text-neutral-200">
							djs-framework is a Framework built on top of discord.js Library, a powerful Node.js module that allows you
							to interact with the Discord API very easily. It takes a much more object-oriented approach than most
							other JS Discord libraries, making your bot&apos;s code significantly tidier and easier to comprehend.
						</p>
						<div className="flex flex-wrap place-content-center gap-4 md:flex-row">
							<a
								className="btn font-semibold rounded bg-light dark:bg-dark border-light dark:border-gray-600 hover:bg-light hover:border-dark dark:hover:bg-dark dark:hover:border-light text-dark dark:text-light"
								href="https://www.npmjs.com/package/@almostjohn/djs-framework"
								rel="external noopener noreferrer"
								target="_blank"
							>
								NPM <ArrowUpRight />
							</a>
							<a
								className="btn font-semibold rounded bg-light dark:bg-dark border-light dark:border-gray-600 hover:bg-light hover:border-dark dark:hover:bg-dark dark:hover:border-light text-dark dark:text-light"
								href="https://github.com/almostJohn/djs-framework"
								rel="external noopener noreferrer"
								target="_blank"
							>
								GitHub <ArrowUpRight />
							</a>
						</div>
						<InstallButton />
					</div>
				</div>
			</div>
		</div>
	);
}
