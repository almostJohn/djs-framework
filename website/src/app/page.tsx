import * as React from "react";
import { HeroSection } from "~/components/hero-section";

export default function IndexPage() {
	return (
		<div className="mx-auto flex min-h-screen flex-col items-center justify-center">
			<HeroSection />
		</div>
	);
}
