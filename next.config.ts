import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
				pathname: "/images/**",
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
