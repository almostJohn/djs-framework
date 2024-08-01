import Link from "next/link";
import * as React from "react";

export function SiteFooter() {
	return (
		<footer className="py-6 md:px-8 md:py-0">
			<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
				<p className="text-balance text-center leading-loose text-sm text-muted-foreground md:text-left">
					Built by{" "}
					<Link href="https://github.com/almostJohn" className="font-medium underline underline-offset-4">
						almostJohn
					</Link>
					. The source code is available on{" "}
					<Link href="https://github.com/almostJohn/djs-framework" className="font-medium underline underline-offset-4">
						GitHub
					</Link>
					.
				</p>
			</div>
		</footer>
	);
}
