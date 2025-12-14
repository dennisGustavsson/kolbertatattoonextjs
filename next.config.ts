import type { NextConfig } from "next";

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!sanityProjectId || !sanityDataset) {
	throw new Error(
		"Missing Sanity env vars for Next.js image remotePatterns. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET to restrict the Sanity CDN path."
	);
}

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
				pathname: `/images/${sanityProjectId}/${sanityDataset}/**`,
			},
		],
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 60 * 60 * 24, // 1 day
	},
	experimental: {
		optimizePackageImports: ["react", "react-dom"],
	},
};

export default nextConfig;
