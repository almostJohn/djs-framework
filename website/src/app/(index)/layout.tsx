import * as React from "react";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";

export default function IndexLayout({ children }: React.PropsWithChildren) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
