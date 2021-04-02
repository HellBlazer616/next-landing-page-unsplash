/* eslint-disable */
const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: "empty", module: "empty" };
    }

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
  images: {
    domains: ["api.pexels.com", 'api.unsplash.com', 'images.unsplash.com'],
  },
  reactStrictMode: true,
};

module.exports = withPlugins([withSvgr, withBundleAnalyzer], nextConfig);
