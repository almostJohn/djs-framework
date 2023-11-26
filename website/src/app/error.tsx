"use client";

export default function Error({ error }: { readonly error: Error }) {
	console.error(error);

	return (
		<div className="mx-auto max-w-lg min-h-screen flex flex-col place-content-center place-items-center gap-8 px-8 py-16 lg:px-6 lg:py-0">
			<h1 className="text-[6rem] font-black leading-none md:text-[3rem]">500</h1>
			<h2 className="text-[3rem] md:text-[3rem] text-center">Error.</h2>
		</div>
	);
}
