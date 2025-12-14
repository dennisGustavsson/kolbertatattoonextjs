import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";

import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

export function safeSanityImageUrl(
	source: SanityImageSource,
	{
		width,
		height,
		context,
	}: { width: number; height?: number; context: string }
): string | null {
	try {
		const withWidth = urlFor(source).width(width);
		const withDims =
			typeof height === "number" ? withWidth.height(height) : withWidth;
		return withDims.url();
	} catch (error) {
		console.error("Failed to build Sanity image URL", {
			context,
			width,
			height,
			error,
		});
		return null;
	}
}
