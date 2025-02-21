import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: "20Mb",
        },
    },
};

export default nextConfig;
